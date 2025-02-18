'use client';

import { atom } from 'recoil';
import Item from './Item';

const ItemList = () => {
  const listState = atom({
    key: 'list',
    default: [],
  });
  console.log(listState);
  return (
    <div>
      <ul>
        {/* {listState &&
          listState.map((item) => <Item item={item} key={item.id} />)} */}
      </ul>
    </div>
  );
};

export default ItemList;
