import { useEffect, useContext  } from 'react'
import { SorterContext } from '../shared/Contexts/SorterContext'
import { WindowContext } from '../shared/Contexts/WindowContext'

const Sorter = () => {
  const [{ array, randomizeArray, algorithm, arraySize, sorting }, setSorter]: any = useContext(SorterContext)
  const [{ innerWidth, innerHeight }] = useContext(WindowContext)

  useEffect(() => {
    if (innerWidth < 1024) randomizeArray(arraySize, 20,400)
    else randomizeArray(arraySize)
  }, [])

  function changeAlgorithm (algorithm: string) {
    if (!sorting) setSorter({ algorithm: algorithm })
  }

  return (
    <div className='flex w-full items-end justify-between p-4 sm:px-8 xl:px-36 lg:px-10'>

      {innerWidth >= 1024 && (
        <div className="flex flex-col rounded-md shadow-sm" role="group">
          <button onClick={() => changeAlgorithm('Bubble')} className={` ${algorithm == 'Bubble' && 'bg-gray-700'} p-4 text-5xl ${sorting && 'cursor-not-allowed'} font-bold text-white rounded-t-lg border border-white`}>
            Bubble 
          </button>
          <button onClick={() => changeAlgorithm('Selection')} className={` ${algorithm == 'Selection' && 'bg-gray-700'} p-4 ${sorting && 'cursor-not-allowed'} text-5xl font-bold text-white border border-white`}>
            Selection 
          </button>
          <button onClick={() => changeAlgorithm('Insertion')} className={` ${algorithm == 'Insertion' && 'bg-gray-700'} p-4 ${sorting && 'cursor-not-allowed'} text-5xl font-bold text-white border border-white`}>
            Insertion 
          </button>
          <button onClick={() => changeAlgorithm('Merge')} className={` ${algorithm == 'Merge' && 'bg-gray-700'} p-4 ${sorting && 'cursor-not-allowed'} text-5xl font-bold text-white border border-white`}>
            Merge 
          </button>
          <button onClick={() => changeAlgorithm('Quick')} className={` ${algorithm == 'Quick' && 'bg-gray-700'} p-4 ${sorting && 'cursor-not-allowed'} text-5xl font-bold text-white border border-white`}>
            Quick 
          </button>
          <button onClick={() => changeAlgorithm('Heap')} className={` ${algorithm == 'Heap' && 'bg-gray-700'} p-4 ${sorting && 'cursor-not-allowed'} text-5xl font-bold text-white rounded-b-lg border border-white`}>
          Heap 
          </button>
        </div>
      )
      
      }
      
      <div className='flex h-[420px] w-full lg:pb-0 gap-1 lg:w-9/12 lg:rotate-180'>
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
            }})
        }
      </div>
    </div>
  )
}

export default Sorter
