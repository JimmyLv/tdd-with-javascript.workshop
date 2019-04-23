const divideBy = divisor => number => number % divisor === 0

export function fizzBuzz(number) {
  let result = ''
  if (divideBy(3)(number)) {result += 'Fizz'}
  if (divideBy(5)(number)) {result += 'Buzz'}
  return result === '' ? number.toString() : result
}
