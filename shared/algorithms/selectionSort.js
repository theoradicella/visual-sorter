import { sleep, finishedAnimation } from "./commonFunctions"

const selectionSort = async ({ array, setSorter, animationSpeed, algorithm, toast }) => {
  var t0 = performance.now()
    let currentArr = array
    let sorted = false
    while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArr.length - 1; i++) {
        for (let j = i + 1; j < currentArr.length; j++) {
          if (currentArr[i] > currentArr[j]) {
            let swap1 = currentArr[i]
            let swap2 = currentArr[j]
            currentArr[i] = swap2
            currentArr[j] = swap1
            setSorter({ array: currentArr})

            let bar1 = document.getElementById(i).style
            let bar2 = document.getElementById(j).style
            bar1.backgroundColor = 'white'
            bar2.backgroundColor = 'white'
      
            await sleep(animationSpeed)
      
            bar1.backgroundColor = '#FF6247'
            bar2.backgroundColor = '#FF6247'

            sorted = false
          }
        }
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

  export default selectionSort