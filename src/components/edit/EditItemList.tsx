'use client';

import { useQuery } from '@tanstack/react-query';
import { getGoodsList } from 'src/actions/item-actions';

const EditItemList = () => {
  const listQuery = useQuery({
    queryKey: ['list'],
    queryFn: () => getGoodsList(),
  });

  return (
    <div>
      {listQuery.isPending && <p>Loading...</p>}
      <ul>
        {listQuery.data &&
          listQuery.data.map((item, index) => (
            <li key={index}>
              {item.name} - {item.cost.toLocaleString()}원
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EditItemList;
