'use client';

import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { addGoods } from 'src/actions/item-actions';
import { listState } from 'src/recoil/listState';

const AddItem = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState<number | ''>('');
  const setGoodsList = useSetRecoilState(listState);

  const onClickHandler = () => {
    if (!name.trim()) return;

    const newItem = {
      id: new Date().toISOString(),
      name,
      cost: cost === '' ? 0 : cost,
    };

    setGoodsList((prev) => {
      const newList = [...prev, newItem];
      addGoods(newList);
      return newList;
    });

    setName('');
    setCost('');
  };

  return (
    <div>
      <Input
        label='상품명'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label='가격'
        type='number'
        value={cost}
        onChange={(e) => setCost(Number(e.target.value))}
      />
      <Button onClick={onClickHandler}>추가</Button>
    </div>
  );
};

export default AddItem;
