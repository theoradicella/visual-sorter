
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const finishedAnimation = async (algorithm, seconds, toast) => {
  toast(`${algorithm} Sort finished in ${seconds} seconds!`, { position: 'bottom-right', type: 'success', hideProgressBar: false, autoClose: 1500 })
}



