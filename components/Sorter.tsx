import { useEffect, useContext  } from 'react'
import { SorterContext } from '../shared/SorterContext'

const Sorter = () => {
  const [{ array, randomizeArray, algorithm, arraySize }, setSorter]: any = useContext(SorterContext)

  useEffect(() => {
    randomizeArray(arraySize)
  }, [])

  return (
    <div className='flex w-full h-full items-end pb-24 p-12 gap-32'>
      <div className="flex flex-col rounded-md shadow-sm" role="group">
        <button onClick={() => setSorter({ algorithm: 'Bubble' })} className={` ${algorithm == 'Bubble' && 'bg-slate-500'} p-4 text-5xl font-bold text-white rounded-t-lg border border-white hover:outline`}>
          Bubble 
        </button>
        <button onClick={() => setSorter({ algorithm: 'Selection' })} className={` ${algorithm == 'Selection' && 'bg-slate-500'} p-4 text-5xl font-bold text-white border border-white hover:outline`}>
          Selection 
        </button>
        <button onClick={() => setSorter({ algorithm: 'Insertion' })} className={` ${algorithm == 'Insertion' && 'bg-slate-500'} p-4 text-5xl font-bold text-white border border-white hover:outline`}>
          Insertion 
        </button>
        <button onClick={() => setSorter({ algorithm: 'Merge' })} className={` ${algorithm == 'Merge' && 'bg-slate-500'} p-4 text-5xl font-bold text-white border border-white hover:outline`}>
          Merge 
        </button>
        <button onClick={() => setSorter({ algorithm: 'Quick' })} className={` ${algorithm == 'Quick' && 'bg-slate-500'} p-4 text-5xl font-bold text-white border border-white hover:outline`}>
          Quick 
        </button>
        <button onClick={() => setSorter({ algorithm: 'Heap' })} className={` ${algorithm == 'Heap' && 'bg-slate-500'} p-4 text-5xl font-bold text-white rounded-b-lg border border-white hover:outline`}>
        Heap 
        </button>
      </div>
      <div className='flex gap-2 w-9/12 justify-center items-end'> 
        {array &&
          array.map((value: number, index: number) => {
            return (
              <div
                className='bg-orange-500 w-20 rounded-t-md'
                id={`${index}`}
                key={index}
                style={{ height: value }}
              ></div>
            )
          })}
      </div>
    </div>
  )
}

export default Sorter
