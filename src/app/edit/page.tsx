import AddItem from 'src/components/edit/AddItem';
import EditItemList from 'src/components/edit/EditItemList';
import ListResetBtn from 'src/components/edit/ListResetBtn';

const EditPage = () => {
  return (
    <div>
      <ListResetBtn />
      <EditItemList />
      <AddItem />
    </div>
  );
};

export default EditPage;
