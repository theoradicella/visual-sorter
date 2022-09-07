import type { NextPage } from 'next'
import Sorter from '../components/Sorter';
import TopBar from '../components/TopBar';
import { SorterProvider } from '../shared/SorterContext';

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
