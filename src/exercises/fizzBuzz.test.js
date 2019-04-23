import fizzBuzz from './fizzBuzz'

describe('test FizzBuzz', () => {
  it('should return string number when given normal number', () => {
    // given
    const number = 1
    // when
    const result = fizzBuzz(number)
    // then
    expect(result).toBe('1')
  })

  it('should return number when given normal number', () => {
    // given
    const number = 4
    // when
    const result = fizzBuzz(number)
    // then
    expect(result).toBe('4')
  })

  it('should return Fizz when given number divisible by 3', () => {
    // given
    const number = 3
    // when
    const result = fizzBuzz(number)
    // then
    expect(result).toBe('Fizz')
  })

  it('should return Buzz when given number divisible by 5', () => {
    // given
    const number = 5
    // when
    const result = fizzBuzz(number)
    // then
    expect(result).toBe('Buzz')
  })

  it('should return FizzBuzz when given number divisible by 3 and 5', () => {
    // given
    const number = 15
    // when
    const result = fizzBuzz(number)
    // then
    expect(result).toBe('FizzBuzz')
  })
});
