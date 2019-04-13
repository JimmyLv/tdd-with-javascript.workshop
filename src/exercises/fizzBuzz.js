export default function(number) {
  const divide = divisor => number => number % divisor === 0
  let result = ''

  if (divide(3)(number)) {
    result += 'Fizz'
  }
  if (divide(5)(number)) {
    result += 'Buzz'
  }

  return result === '' ? number + '' : result
}
