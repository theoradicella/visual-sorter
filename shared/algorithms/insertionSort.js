import { sleep, finishedAnimation } from "./commonFunctions"

 const insertionSort = async ({ array, setSorter, animationSpeed, algorithm, toast }) => {
    var t0 = performance.now()
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
          bar1.backgroundColor = 'white'
          bar2.backgroundColor = 'white'
    
          await sleep(animationSpeed)
    
          bar1.backgroundColor = '#FF6247'
          bar2.backgroundColor = '#FF6247'

          sorted = false
          j--
        }
        currentArr[j + 1] = current
        setSorter({ array: currentArr})
      }

      if (sorted) {
        var t1 = performance.now();
        const ms = t1 - t0
        const seconds = ((ms/1000) % 60).toFixed(2)
        finishedAnimation(algorithm, seconds, toast)
      } 
    }
    setSorter({sorting: false})
  }

  export default insertionSort