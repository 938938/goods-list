'use client';

import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';

const AddItem = () => {
  const [name, setName] = useState<string>('');
  const [cost, setCost] = useState<number>(undefined);
  const onClickHandler = () => {
    if (!name.trim()) return;
    const id = new Date();

    const newItem = { id, name, cost: cost || 0 };

    const existingList = JSON.parse(localStorage.getItem('list') || '[]');

    const updatedList = [...existingList, newItem];

    localStorage.setItem('list', JSON.stringify(updatedList));

    setName('');
    setCost(undefined);

    window.dispatchEvent(new Event('localStorageUpdated'));
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
