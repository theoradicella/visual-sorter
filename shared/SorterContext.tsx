import { createContext, useReducer } from 'react'

export const SorterContext = createContext([])

export const SorterProvider = (props: any) => {
  function sorterReducer(state: any, newState: any) {
    return {
      ...state,
      ...newState,
    }
  }

  const [sorter, setSorter] = useReducer(sorterReducer, {
    array: [],
    arraySize: 60,
    algorithm: 'Bubble',
    animationSpeed : 40,
    randomizeArray: (arraySize: number) => {
      const randomVals = (min: number, max: number) => {
        let randomVal = Math.floor(Math.random() * (max - min + 1) + min)
        return randomVal
      }
  
      for (let i: any = 0; i < sorter.array.length; i++) {
        let bar = document.getElementById(i)?.style
        if (bar) bar.backgroundColor = '#1eba4f'
      }
  
      let newArray: any  = []
      
      for (let i = 0; i < arraySize; i++) {
        newArray.push(randomVals(20, 450))
      }
  
      setSorter({ array: newArray })
    }
  })

  const value = [sorter, setSorter]


  return <SorterContext.Provider value={value} {...props} />
}
