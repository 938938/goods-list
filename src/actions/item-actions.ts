export const getGoodsList = () => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('list')) || [];
};

export const addGoods = async (name: string, cost: number) => {
  if (!name.trim()) return;
  const id = new Date();
  const newItem = { id, name, cost: cost || 0 };
  const existingList = JSON.parse(localStorage.getItem('list') || '[]');
  const updatedList = [...existingList, newItem];
  localStorage.setItem('list', JSON.stringify(updatedList));
  return;
};
