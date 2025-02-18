'use client';

import { Input } from '@material-tailwind/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { ItemType } from 'src/model/type';
import { listState } from 'src/recoil/listState';

const Item = ({ item }: { item: ItemType }) => {
  const [count, setCount] = useState<number>(item.count);
  const setGoodsList = useSetRecoilState(listState);

  const onChangeHandler = (e) => {
    let newCount = Number(e.target.value);
    if (isNaN(newCount) || newCount < 0) newCount = 0;
    setCount(newCount);
    setGoodsList((prev) =>
      prev.map((ele) =>
        ele.id === item.id ? { ...ele, count: newCount } : ele
      )
    );
  };

  return (
    <li>
      <p>
        {item.name} - {item.cost.toLocaleString()}원 / {item.count} 개
      </p>
      <Input type='number' value={count} onChange={onChangeHandler} min={0} />
    </li>
  );
};

export default Item;
