'use client';

import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';

const AddItem = () => {
  const [name, setName] = useState<string>('');
  const [cost, setCost] = useState<number>(undefined);

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
      <Button>추가</Button>
    </div>
  );
};

export default AddItem;
