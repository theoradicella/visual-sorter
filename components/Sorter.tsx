import { useEffect, useContext  } from 'react'
import { SorterContext } from '../shared/Contexts/SorterContext'

const Sorter = () => {
  const [{ array, randomizeArray, algorithm, arraySize }, setSorter]: any = useContext(SorterContext)

  useEffect(() => {
    randomizeArray(arraySize)
  }, [])

  return (
    <div className='flex w-full h-full items-end pb-16 p-12 gap-32 mt-11'>
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
      <div className='flex gap-1 w-9/12 rotate-180'> 
        {array &&
          array.map((value: number, index: number) => {
            if(value) {
              return (
                <div
                  className='bg-orange-500 w-[5rem] rounded-t-sm inline-block'
                  id={`${index}`}
                  key={index}
                  style={{ height: value }}
                ></div>
              )
            }
          })}
      </div>
    </div>
  )
}

export default Sorter
