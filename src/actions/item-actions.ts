import { ItemType } from 'src/model/type';

export const editGoods = async (data: ItemType[]) => {
  localStorage.setItem('list', JSON.stringify(data));
  return;
};

export const deleteGoods = async () => {
  localStorage.clear();
  return;
};
