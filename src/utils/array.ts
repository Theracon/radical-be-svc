export const shuffle = (array: any[]) => {
  const newArr = [...array]
  let currentIndex = newArr.length

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]]
  }

  return newArr
}
