import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import LandingModal from '../components/LandingModal';

const  TopBar = dynamic(() => import('../components/TopBar'), { ssr: false })
const  Sorter = dynamic(() => import('../components/Sorter'), { ssr: false })

const Home: NextPage = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className='flex w-full flex-col justify-around overflow-hidden pb-2'>
      <TopBar openModal={setOpen} />
      <Sorter />
      <LandingModal open={open} setOpen={setOpen} />
    </div>
  )
}

export default Home
