'use client';

import { Button } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';
import { deleteGoods } from 'src/actions/item-actions';
import { listState } from 'src/recoil/listState';

const ListResetBtn = () => {
  const setGoodsList = useSetRecoilState(listState);
  const onListResetHandler = () => {
    setGoodsList([]);
    deleteGoods();
  };
  return (
    <Button onClick={onListResetHandler} className='w-full'>
      초기화
    </Button>
  );
};

export default ListResetBtn;
