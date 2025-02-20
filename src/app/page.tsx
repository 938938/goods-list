import ItemList from 'src/components/home/ItemList';
import CountResetBtn from 'src/components/home/CountResetBtn';
import TotalCost from 'src/components/home/TotalCost';

export default function Home() {
  return (
    <div className='flex gap-3 flex-col'>
      <CountResetBtn />
      <ItemList />
      <TotalCost />
    </div>
  );
}
