import { ItemType } from 'src/model/type';

const list = JSON.parse(localStorage.getItem('list') || '[]');

export const getGoodsList = () => {
  if (typeof window === 'undefined') return [];
  return list.map((item: ItemType) => ({
    ...item,
    count: 0,
  }));
};

export const addGoods = async (name: string, cost: number) => {
  if (!name.trim()) return;
  const id = new Date();
  const newItem = { id, name, cost: cost || 0 };
  const updatedList = [...list, newItem];
  localStorage.setItem('list', JSON.stringify(updatedList));
  return;
};

export const changeCount = async (id: string, count: number) => {
  return list.map((item: ItemType) => {
    if (item.id === id) {
      return { ...item, count: count };
    } else {
      return { ...item };
    }
  });
};
