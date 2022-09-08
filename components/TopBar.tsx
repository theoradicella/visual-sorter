import { useContext } from "react"
import { SorterContext } from "../shared/SorterContext"

// Algorithms
import bubbleSort from '../shared/algorithms/bubbleSort'
import selectionSort from '../shared/algorithms/selectionSort'
import insertionSort from '../shared/algorithms/insertionSort'
import quickSort from '../shared/algorithms/quickSort'
import heapSort from '../shared/algorithms/heapSort'
import mergeSort from '../shared/algorithms/mergeSort'

const TopBar = () => {
  const [{array, algorithm, randomizeArray, arraySize, animationSpeed}, setSorter]: any = useContext(SorterContext)

  const changeArraySize = (e: any) => {
    setSorter({ arraySize: e.target.value})
    randomizeArray(arraySize)
  }

  const handleSorting = () => {
    switch (algorithm) {
      case 'Bubble':
        bubbleSort(array, setSorter, animationSpeed)
        break
      case 'Selection':
        selectionSort(array, setSorter, animationSpeed)
        break
      case 'Insertion':
        insertionSort(array, setSorter, animationSpeed)
        break
      case 'Merge':
        mergeSort(array, setSorter, animationSpeed)
        break
      case 'Quick':
        quickSort(array, setSorter, animationSpeed)
        break
      case 'Heap':
        heapSort(array, setSorter, animationSpeed)
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
        <input id="speed-range" min={5} type="range" value={animationSpeed} onChange={(e) => setSorter({ animationSpeed: e.target.value})} className="rotate-180 w-full text-yellow-500 bg-gray-800 rounded-md cursor-pointer appearance-none" />
      </div>
      <div className="w-1/4 flex flex-col items-center">
        <label htmlFor="size-range" className="text-4xl mb-1 text-white">Array Size {arraySize}</label>
        <input id="size-range" min={15} max={85} type="range" value={arraySize} onChange={(e) => changeArraySize(e)}  className=" w-full text-yellow-500 bg-gray-800 rounded-md cursor-pointer appearance-none" />
      </div>
      <button onClick={() => randomizeArray(arraySize)} className='text-white text-5xl p-2 bg-orange-500 hover:bg-orange-400 rounded-lg'>NEW</button>
      <button onClick={handleSorting} className='text-white text-5xl p-3 bg-orange-500 rounded-lg font-extrabold hover:bg-orange-400'>SORT</button>
    </div>
  )
}

export default TopBar
