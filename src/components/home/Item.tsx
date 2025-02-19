'use client';

import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { ItemType } from 'src/model/type';
import { listState } from 'src/recoil/listState';

const Item = ({ item }: { item: ItemType }) => {
  const [count, setCount] = useState<number>(item.count || 0);
  const setGoodsList = useSetRecoilState(listState);

  const onCountChangeHandler = (newCount: number) => {
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
      <td className='p-4 border-b'>{item.cost.toLocaleString()}</td>
      <td className='p-4 border-b flex gap-2'>
        <Button onClick={() => onCountChangeHandler(Math.max(count - 1, 0))}>
          -
        </Button>
        <Input
          label='수량'
          type='number'
          value={count}
          onChange={(e) => onCountChangeHandler(Number(e.target.value))}
          min={0}
        />
        <Button onClick={() => onCountChangeHandler(count + 1)}>+</Button>
      </td>
    </tr>
  );
};

export default Item;
