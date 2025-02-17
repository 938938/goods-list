'use client';

import { Input } from '@material-tailwind/react';
import { useState } from 'react'
import { ItemType } from 'src/model/type';

const Item = ({ item }: { item: ItemType }) => {
  const [count, setCount] = useState<number>(item.count);

  const onChangeHandler = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <li>
      <p>
        {item.name} - {item.cost.toLocaleString()}원 / {item.count} 개
      </p>
      <Input type='number' value={count} onChange={onChangeHandler} />
    </li>
  );
};

export default Item;
