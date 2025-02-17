'use client';

import { useEffect, useState } from 'react';
import { ItemType } from 'src/model/type';

const EditItemList = () => {
  const [list, setList] = useState<ItemType[]>(() => {
    if (typeof window === 'undefined') return []; // SSR 방지
    const storedList = localStorage.getItem('list');
    return storedList ? JSON.parse(storedList) : [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedList = localStorage.getItem('list');
      setList(storedList ? JSON.parse(storedList) : []);
    };

    window.addEventListener('localStorageUpdated', handleStorageChange);
    return () =>
      window.removeEventListener('localStorageUpdated', handleStorageChange);
  }, []);

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

export default EditItemList;
