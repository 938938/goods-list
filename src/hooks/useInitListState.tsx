'use client';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { listState } from 'src/recoil/listState';

const useInitListState = () => {
  const setList = useSetRecoilState(listState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const list = localStorage.getItem('list');
      if (list) {
        try {
          const goodsList = JSON.parse(list).map((ele) => ({
            ...ele,
            count: 0,
          }));
          setList(goodsList);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }, [setList]);
};

export default useInitListState;
