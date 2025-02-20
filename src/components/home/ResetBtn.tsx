'use client';

import { Button } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';
import { listState } from 'src/recoil/listState';

const ResetBtn = () => {
  const setGoodsList = useSetRecoilState(listState);
  const onResetHandler = () => {
    setGoodsList((prev) => prev.map((ele) => ({ ...ele, count: 0 })));
  };
  return (
    <Button onClick={onResetHandler} className='w-full'>
      초기화
    </Button>
  );
};

export default ResetBtn;
