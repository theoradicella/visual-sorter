import { useContext } from "react"
import { SorterContext } from "../shared/Contexts/SorterContext"
import { toast } from 'react-toastify';


// Algorithms
import bubbleSort from '../shared/algorithms/bubbleSort'
import selectionSort from '../shared/algorithms/selectionSort'
import insertionSort from '../shared/algorithms/insertionSort'
import quickSort from '../shared/algorithms/quickSort'
import heapSort from '../shared/algorithms/heapSort'
import mergeSort from '../shared/algorithms/mergeSort'

const TopBar = () => {
  const [{array, sorting, algorithm, randomizeArray, arraySize, animationSpeed}, setSorter]: any = useContext(SorterContext)
  const sortProps = { array, setSorter, animationSpeed, algorithm, toast }

  const changeArraySize = (e: any) => {
    if(sorting) return
    setSorter({ arraySize: e.target.value})
    randomizeArray(arraySize)
  }

  const changeSorterSpeed = (e: any) => {
    if(sorting) return
    setSorter({ animationSpeed: e.target.value})
  }

  const createNewArray = () => {
    if(sorting) return
    randomizeArray(arraySize)
  }


  const handleSorting = () => {
    if (sorting) return
    setSorter({sorting: true})
    switch (algorithm) {
      case 'Bubble':
        bubbleSort(sortProps)
        break
      case 'Selection':
        selectionSort(sortProps)
        break
      case 'Insertion':
        insertionSort(sortProps)
        break
      case 'Merge':
        mergeSort(sortProps)
        break
      case 'Quick':
        quickSort(sortProps)
        break
      case 'Heap':
        heapSort(sortProps)
        break
      default:
        break
    }
  }


  function speedName(speed: number) {
    return 100 - speed
  }

  return (
    <div className='fixed flex w-full gap-10 items-center z-50 bg-black py-6 px-12 top-0'>
      <span className="text-white text-6xl border-2 p-2 mr-10">Visual Sorter</span>
      <div className="w-1/4 flex flex-col items-center">
        <label htmlFor="speed-range" className="text-4xl mb-1 text-white">Speed x{speedName(animationSpeed)}</label>
        <input id="speed-range" min={5} type="range" value={animationSpeed} onChange={(e) => changeSorterSpeed(e)} className={`rotate-180 w-full text-yellow-500 bg-gray-800 rounded-md ${sorting ? 'cursor-not-allowed' : 'cursor-pointer'} appearance-none`} />
      </div>
      <div className="w-1/4 flex flex-col items-center">
        <label htmlFor="size-range" className="text-4xl mb-1 text-white">Array Size {arraySize}</label>
        <input id="size-range" min={15} max={85} type="range" value={arraySize} onChange={(e) => changeArraySize(e)}  className={`w-full text-yellow-500 bg-gray-800 rounded-md ${sorting ? 'cursor-not-allowed' : 'cursor-pointer'} appearance-none`} />
      </div>
      <button onClick={createNewArray} className={` ${sorting ? 'bg-slate-500 cursor-not-allowed': 'bg-orange-500 hover:bg-orange-400'} text-white text-5xl p-2 rounded-lg`}>NEW</button>
      {
        sorting ? 
          <button disabled type="button" className=" cursor-not-allowed flex items-center gap-1 text-white text-4xl p-3 bg-slate-500 rounded-lg font-extrabold">
            <svg role="status" className="inline w-7 h-7 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
            </svg>
            Sorting
          </button> :
          <button onClick={handleSorting} className='text-white text-5xl p-3 bg-orange-500 rounded-lg font-extrabold hover:bg-orange-400'>SORT</button>
      }
      
    </div>
  )
}

export default TopBar
