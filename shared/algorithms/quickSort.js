import { sleep, finishedAnimation } from "./commonFunctions"

const quickSort = async ({ array, setSorter, animationSpeed, algorithm, toast }) => {
  var t0 = performance.now()

  let currentArr = array
  
  const partition = (arr, left, right) => {
    let pivot = arr[right]
    let i = left - 1
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
  
        let bar1 = document.getElementById(i).style
        let bar2 = document.getElementById(j).style
        bar1.backgroundColor = 'white'
        bar2.backgroundColor = 'white'
  
        setTimeout(() => {
          bar1.backgroundColor = '#FF6247'
          bar2.backgroundColor = '#FF6247'
        }, 200)
  
        setSorter({ array: [...array]})
      }
    }
  
    let temp = arr[i + 1]
    arr[i + 1] = arr[right]
    arr[right] = temp
  
    return i + 1
  }

  const sorts = async (arr, left, right) => {
    if (left < right) {
      let partitionIndex = partition(arr, left, right)
  
      setSorter({ array: [...array]})
      await sleep(animationSpeed)
      await sorts(arr, left, partitionIndex - 1)
      await sorts(arr, partitionIndex + 1, right)
    }
  }

  await sorts(currentArr, 0, currentArr.length - 1)
  var t1 = performance.now();
  const ms = t1 - t0
  const seconds = ((ms/1000) % 60).toFixed(2)
  finishedAnimation(algorithm, seconds, toast)
  setSorter({sorting: false})

}


export default quickSort