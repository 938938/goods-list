import ItemList from 'src/components/home/ItemList';
import ResetBtn from 'src/components/home/ResetBtn';
import TotalCost from 'src/components/home/TotalCost';

export default function Home() {
  return (
    <div className='flex gap-3 flex-col'>
      <ResetBtn />
      <ItemList />
      <TotalCost />
    </div>
  );
}
