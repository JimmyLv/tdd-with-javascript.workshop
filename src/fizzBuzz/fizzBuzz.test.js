import fizzBuzz from './fizzBuzz'

describe('should test FizzBuzz', () => {
  it('should return number when given number is not divisible by 3 or 5', function () {
    //given
    let number = 1
    //when
    let result = fizzBuzz(number)
    //then
    expect(result).toEqual('1')
  })
  it('should return Fizz when number divisible by 3', function () {

    //given
    let number = 3
    //when
    let result = fizzBuzz(number)
    //then
    expect(result).toBe('Fizz')
  })

  it('should return Buzz when number divisible by 5', function () {
    //given
    let number = 5
    //when
    let result = fizzBuzz(number)
    //then
    expect(result).toBe('Buzz')
  })
})