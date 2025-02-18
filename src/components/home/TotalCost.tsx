'use client';

import { useRecoilValue } from 'recoil';
import { listState } from 'src/recoil/listState';

const TotalCost = () => {
  const goodsList = useRecoilValue(listState);
  const totalCost = goodsList.reduce((sum, item) => {
    return item.count > 0 ? sum + item.cost * item.count : sum;
  }, 0);
  return <div>총액 : {totalCost.toLocaleString()}원</div>;
};

export default TotalCost;
