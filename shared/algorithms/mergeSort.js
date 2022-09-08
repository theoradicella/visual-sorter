import { finishedAnimation, sleep } from "./commonFunctions"

const mergeSort = async ({ array, setSorter, animationSpeed, algorithm, toast }) => {
  var t0 = performance.now()
  let currentArr = array
  const merge = async (arr, low, mid, high) => {
    let i = low
    let j = mid + 1
    let k = 0
    let tempArr = []
  
    while (i <= mid && j <= high) {
      if (arr[i] < arr[j]) {
        tempArr[k] = arr[i]
        i++
        k++
      } else {
        tempArr[k] = arr[j]
        j++
        k++
      }
      setSorter({ array: [...array, null]})
  
      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j)?.style
      bar1.backgroundColor = 'white'
      if (bar2) bar2.backgroundColor = 'white'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF6247'
      if (bar2) bar2.backgroundColor = '#FF6247'
  
    }
  
    while (i <= mid) {
      tempArr[k] = arr[i]
  
      setSorter({ array: [...array, null]})
  
      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j)?.style
      bar1.backgroundColor = '#DC143C'
      if (bar2) bar2.backgroundColor = 'black'
  
      await sleep(animationSpeed)
  
      bar1.backgroundColor = '#FF6247'
      if (bar2) bar2.backgroundColor = '#FF6247'
  
  
      i++
      k++
    }
  
    while (j <= high) {
      tempArr[k] = arr[j]
  
      setSorter({ array: [...array, null]})
  
      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j)?.style
      bar1.backgroundColor = 'white'
      if (bar2) bar2.backgroundColor = 'white'
  
      await sleep(animationSpeed)
  
      bar1.backgroundColor = '#FF7F50'
      if (bar2) bar2.backgroundColor = '#FF7F50'
  
  
      j++
      k++
    }
  
    for (let i = low; i <= high; i++) {
      arr[i] = tempArr[i - low]
      setSorter({ array: arr})
    }

  }

  const sort = async (arr, low, high) => {
    if (low < high) {
      let mid = Math.floor((low + high) / 2)
      await sort(arr, low, mid)
      await sort(arr, mid + 1, high)
      await merge(arr, low, mid, high)
    }
  }

  await sort(currentArr, 0, currentArr.length - 1)

  
  var t1 = performance.now();
  const ms = t1 - t0
  const seconds = ((ms/1000) % 60).toFixed(2)
  finishedAnimation(algorithm, seconds, toast)
  setSorter({sorting: false})
  
}

export default mergeSort