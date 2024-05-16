import NamesList from '@/components/NamesList';
import AddName from '@/components/AddName';
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Add items</h1>
      <AddName />
      <NamesList />
    </div>
  );
}
