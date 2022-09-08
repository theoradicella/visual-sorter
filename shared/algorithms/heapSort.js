import { sleep, finishedAnimation } from "./commonFunctions"

const heapSort = async (array, setSorter, animationSpeed) => {
  let arr = array
  let length = arr.length
  let index = Math.floor(length / 2 - 1)
  let lastChild = length - 1

  const heapify = async (arr, length, index) => {
    let largest = index
    let leftNode = index * 2 + 1
    let rightNode = leftNode + 1
  
    if (arr[leftNode] > arr[largest] && leftNode < length) {
      largest = leftNode
    }
  
    if (arr[rightNode] > arr[largest] && rightNode < length) {
      largest = rightNode
    }
  
    if (largest !== index) {
      let swap1 = arr[index]
      let swap2 = arr[largest]
      arr[index] = swap2
      arr[largest] = swap1
  
      let bar1 = document.getElementById(index).style
      let bar2 = document.getElementById(largest).style
      bar1.backgroundColor = 'white'
      bar2.backgroundColor = 'white'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF6247'
      bar2.backgroundColor = '#FF6247'
  
  
      await heapify(arr, length, largest)
    }
  
    return arr
  }

  while (index >= 0) {
    await heapify(arr, length, index)
    index--

    setSorter({ array: [...array, arr]})

    if (index >= 0) {
      let bar1 = document.getElementById(index).style
      let bar2 = document.getElementById(index + 1).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = 'black'

      await sleep(animationSpeed)


      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'
    } else {
      await sleep(animationSpeed)
    }
  }

  while (lastChild >= 0) {
    let swap1 = arr[0]
    let swap2 = arr[lastChild]

    arr[0] = swap2
    arr[lastChild] = swap1
    await heapify(arr, lastChild, 0)
    lastChild--

    setSorter({ array: [...array, arr]})

    if (index >= 0) {
      let bar1 = document.getElementById(lastChild).style
      let bar2 = document.getElementById(0).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = 'black'

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'
    } else {
      await sleep(animationSpeed)
    }
  }

  finishedAnimation(array, animationSpeed)
}

export default heapSort