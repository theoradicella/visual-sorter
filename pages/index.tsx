import type { NextPage } from 'next'
import Sorter from '../components/Sorter';
import TopBar from '../components/TopBar';
import { toast } from 'react-toastify';
import { SorterProvider } from '../shared/Contexts/SorterContext';

const Home: NextPage = () => {
  return (
    <SorterProvider>
      <div className='overflow-hidden'>
        <TopBar />
        <Sorter />
      </div>
    </SorterProvider>
  )
}

export default Home
