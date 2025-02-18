'use client';
import useInitListState from 'src/hooks/useInitListState';
import Item from './Item';
import { useRecoilValue } from 'recoil';
import { listState } from 'src/recoil/listState';

const ItemList = () => {
  useInitListState();
  const goodsList = useRecoilValue(listState);
  return (
    <div>
      <ul>
        {goodsList &&
          goodsList.map((item) => <Item item={item} key={item.id} />)}
      </ul>
    </div>
  );
};

export default ItemList;
