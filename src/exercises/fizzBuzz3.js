const divideBy = divisor => num => num % divisor === 0

export function fizzBuzz(num) {
  if (typeof num !== 'number') {
    throw new Error('Please input number!')
  }
  const numStr = num.toString()

  return [
    [3, 'Fizz'],
    [5, 'Buzz'],
  ]
    .map(([divisor, word]) =>
      divideBy(divisor)(num) || numStr.includes(divisor)
        ? word
        : '',
    )
    .reduce((pre, current) => pre + current) || numStr
}
