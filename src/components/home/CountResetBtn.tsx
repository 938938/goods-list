'use client';

import { Button } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';
import { listState } from 'src/recoil/listState';

const CountResetBtn = () => {
  const setGoodsList = useSetRecoilState(listState);
  const onCountResetHandler = () => {
    setGoodsList((prev) => prev.map((ele) => ({ ...ele, count: 0 })));
  };
  return (
    <Button onClick={onCountResetHandler} className='w-full'>
      초기화
    </Button>
  );
};

export default CountResetBtn;
