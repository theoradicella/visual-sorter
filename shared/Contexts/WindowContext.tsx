import { createContext, useEffect, useState } from 'react'

export const WindowContext = createContext([])

export const WindowProvider = (props: any) => {
  const [windowSize, setWindowSize] = useState(getWindowSize)

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  function getWindowSize() {
    let windowSize: any = {
      innerWidth: 0,
      innerHeight: 0
    }
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window
      windowSize.innerWidth = innerWidth
      windowSize.innerHeight = innerHeight
    }
    return windowSize
  }

  const value = props.storyBook ? props.storyBook : [windowSize, setWindowSize]

  return <WindowContext.Provider value={value} {...props} />
}
