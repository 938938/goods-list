'use client';

import { useRecoilValue } from 'recoil';
import useInitListState from 'src/hooks/useInitListState';
import { listState } from 'src/recoil/listState';

const EditItemList = () => {
  useInitListState();
  const goodsList = useRecoilValue(listState);
  return (
    <div>
      <ul>
        {goodsList &&
          goodsList.map((item, index) => (
            <li key={index}>
              {item.name} - {item.cost.toLocaleString()}원
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EditItemList;
