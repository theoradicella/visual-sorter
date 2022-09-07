
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const finishedAnimation = async (array, animationSpeed) => {
  for (let i = 0; i < array.length; i++) {
    let bar = document.getElementById(i)
    bar.classList.add = 'animate-ping'
    await sleep(animationSpeed)
  }
}