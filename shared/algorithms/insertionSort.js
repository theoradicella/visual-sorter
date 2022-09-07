import { sleep, finishedAnimation } from "./commonFunctions"

 const insertionSort = async (array, setSorter, animationSpeed) => {
    let currentArr = array
    let sorted = false
    while (!sorted) {
      sorted = true

      for (let i = 1; i < currentArr.length; i++) {
        let current = currentArr[i]
        let j = i - 1
        while (j >= 0 && currentArr[j] > current) {
          currentArr[j + 1] = currentArr[j]
          setSorter({ array: [...array, currentArr]})

          let bar1 = document.getElementById(j + 1).style
          let bar2 = document.getElementById(j).style
          bar1.backgroundColor = '#64748B'
          bar2.backgroundColor = '#749ea1'
    
          await sleep(animationSpeed)
    
          bar1.backgroundColor = '#FF6247'
          bar2.backgroundColor = '#FF6247'

          j--
          sorted = false
        }
        currentArr[j + 1] = current
        setSorter({ array: [...array, currentArr]})
      }
      if (sorted) finishedAnimation(array, animationSpeed)
    }
  }

  export default insertionSort