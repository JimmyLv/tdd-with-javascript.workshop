const deviseBy = divisor => number => number % divisor === 0

export function fizzBuzz(number) {
  let result = ''
  if (deviseBy(3)(number)) { result += 'Fizz'}
  if (deviseBy(5)(number)) { result += 'Buzz' }
  return result === '' ? number + '' : result
}
