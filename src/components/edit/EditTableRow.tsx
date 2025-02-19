'use client';

import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { editGoods } from 'src/actions/item-actions';
import { ItemType } from 'src/model/type';
import { listState } from 'src/recoil/listState';

const EditTableRow = ({ item }: { item: ItemType }) => {
  const setGoodsList = useSetRecoilState(listState);

  const [editValues, setEditValues] = useState<ItemType | null>(null);
  const onEditClickHandler = (item: ItemType) => {
    setEditValues({ ...item });
  };

  const onDataChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({
      ...prev,
      [name]: name === 'cost' ? Number(value) || 0 : value,
    }));
  };

  const onSaveHandler = () => {
    if (!editValues) return;
    if (!editValues.name) return;
    setGoodsList((prev) => {
      const editList = prev.map((item) =>
        item.id === editValues.id ? editValues : item
      );
      editGoods(editList);
      return editList;
    });
    setEditValues(null);
  };

  const onDeleteHandler = (id: string) => {
    setGoodsList((prev) => {
      const editList = prev.filter((item) => item.id !== id);
      editGoods(editList);
      return editList;
    });
  };
  return (
    <tr key={item.id}>
      <td className='p-4 border-b'>
        {editValues?.id === item.id ? (
          <Input
            name='name'
            value={editValues.name}
            onChange={onDataChangeHandler}
            className='w-full'
          />
        ) : (
          <p>{item.name}</p>
        )}
      </td>
      <td className='p-4 border-b'>
        {editValues?.id === item.id ? (
          <Input
            name='cost'
            type='number'
            value={editValues.cost}
            onChange={onDataChangeHandler}
            className='w-full'
          />
        ) : (
          <p>{item.cost}</p>
        )}
      </td>
      <td className='p-4 border-b flex gap-2'>
        {editValues?.id === item.id ? (
          <Button size='sm' onClick={onSaveHandler} color='blue'>
            저장
          </Button>
        ) : (
          <Button size='sm' onClick={() => onEditClickHandler(item)}>
            수정
          </Button>
        )}
        {editValues?.id === item.id ? (
          <Button size='sm' onClick={() => setEditValues(null)}>
            취소
          </Button>
        ) : (
          <Button
            size='sm'
            color='red'
            onClick={() => onDeleteHandler(item.id)}
          >
            삭제
          </Button>
        )}
      </td>
    </tr>
  );
};

export default EditTableRow;
