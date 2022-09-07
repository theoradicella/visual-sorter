import { sleep, finishedAnimation } from "./commonFunctions"

const bubbleSort = async (array, setSorter, animationSpeed) => {
  let currentArr = array
  let sorted = false

  while (!sorted) {
    sorted = true

    for (let i = 0; i < currentArr.length - 1; i++) {
      for (let j = 0; j < currentArr.length - i - 1; j++) {
        if (currentArr[j] > currentArr[j + 1]) {
          let temp = currentArr[j]
          currentArr[j] = currentArr[j + 1]
          currentArr[j + 1] = temp
          setSorter({ array: [...array, currentArr]})

          let bar1 = document.getElementById(j).style
          let bar2 = document.getElementById(j + 1).style
          bar1.backgroundColor = '#64748B'
          bar2.backgroundColor = '#749ea1'

          await sleep(animationSpeed)

          bar1.backgroundColor = '#FF6247'
          bar2.backgroundColor = '#FF6247'

          sorted = false
        }
      }
    }
    if (sorted) finishedAnimation(array, animationSpeed)
  }
}

export default bubbleSort