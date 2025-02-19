'use client';

import { Typography } from '@material-tailwind/react';
import { useRecoilValue } from 'recoil';
import { listState } from 'src/recoil/listState';

const TotalCost = () => {
  const goodsList = useRecoilValue(listState);
  const totalCost = goodsList.reduce((sum, item) => {
    return item.count > 0 ? sum + item.cost * item.count : sum;
  }, 0);
  return (
    <div className='flex py-3 justify-center'>
      <Typography color='black' variant='lead'>
        총액 : {totalCost.toLocaleString()}원
      </Typography>
    </div>
  );
};

export default TotalCost;
