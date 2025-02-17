'use client';

import { useState } from 'react';
import { ItemType } from 'src/model/type';

const ItemList = () => {
  const [list, setList] = useState<ItemType[]>(() => {
    if (typeof window === 'undefined') return []; // SSR 방지
    const storedList = localStorage.getItem('list');
    return storedList ? JSON.parse(storedList) : [];
  });
  return (
    <div>
      {list.length > 0 ? (
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item.name} - {item.cost.toLocaleString()}원
            </li>
          ))}
        </ul>
      ) : (
        <p>저장된 항목이 없습니다.</p>
      )}
    </div>
  );
};

export default ItemList;
