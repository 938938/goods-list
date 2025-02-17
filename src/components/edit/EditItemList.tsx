'use client';

import { getGoodsList } from 'src/actions/item-actions';

const EditItemList = () => {
  return (
    <div>
      {/* {listQuery.isPending && <p>Loading...</p>}
      <ul>
        {listQuery.data &&
          listQuery.data.map((item, index) => (
            <li key={index}>
              {item.name} - {item.cost.toLocaleString()}원
            </li>
          ))}
      </ul> */}
    </div>
  );
};

export default EditItemList;
