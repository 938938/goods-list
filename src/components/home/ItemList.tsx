'use client';

import { Input } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import { getGoodsList } from 'src/actions/item-actions';

const ItemList = () => {
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
              <p>
                {item.name} - {item.cost.toLocaleString()}원
              </p>
              <Input type='number' />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ItemList;
