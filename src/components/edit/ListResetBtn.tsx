'use client';

import { Button } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';
import { deleteGoods } from 'src/actions/item-actions';
import { listState } from 'src/recoil/listState';
import DelModal from '../DelModal';
import { useState } from 'react';

const ListResetBtn = () => {
  const setGoodsList = useSetRecoilState(listState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const onListResetHandler = () => {
    setGoodsList([]);
    deleteGoods();
    setModalOpen(false);
  };
  return (
    <>
      <Button onClick={() => setModalOpen(true)} className='w-full'>
        목록 모두 삭제
      </Button>
      <DelModal
        open={modalOpen}
        setOpen={setModalOpen}
        onDeleteHandler={onListResetHandler}
        type='초기화'
      />
    </>
  );
};

export default ListResetBtn;
