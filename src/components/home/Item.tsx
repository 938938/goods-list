'use client';

import { Input } from '@material-tailwind/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { ItemType } from 'src/model/type';
import { listState } from 'src/recoil/listState';

const Item = ({ item }: { item: ItemType }) => {
  const [count, setCount] = useState<number>(item.count || 0);
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
    <tr key={item.id}>
      <td className='p-4 border-b'>{item.name}</td>
      <td className='p-4 border-b'>{item.cost}</td>
      <td className='p-4 border-b flex gap-2'>
        <Input type='number' value={count} onChange={onChangeHandler} min={0} />
      </td>
    </tr>
  );
};

export default Item;
