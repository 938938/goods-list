'use client';

import { Button, Input } from '@material-tailwind/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { addGoods, getGoodsList } from 'src/actions/item-actions';

const AddItem = () => {
  const [name, setName] = useState<string>('');
  const [cost, setCost] = useState<number>(undefined);
  const listQuery = useQuery({
    queryKey: ['list'],
    queryFn: () => getGoodsList(),
  });

  const addGoodsMutation = useMutation({
    mutationFn: () => addGoods(name, cost),
    onSuccess: () => {
      listQuery.refetch();
      setName('');
      setCost(undefined);
    },
  });

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
      <Button
        onClick={() => addGoodsMutation.mutate()}
        loading={addGoodsMutation.isPending}
      >
        추가
      </Button>
    </div>
  );
};

export default AddItem;
