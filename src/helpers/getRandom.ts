export function generateNumbers(count: number, min: number, max: number) {
  const result = []
  let previousNumber = Math.floor(Math.random() * (max - min + 1)) + min
  result.push(previousNumber)

  for (let i = 1; i < count; i++) {
    const difference = Math.floor((max - previousNumber) / (count - i))
    const newNumber =
      previousNumber + Math.floor(Math.random() * (difference + 1))
    result.push(newNumber)
    previousNumber = newNumber
  }

  return result
}
