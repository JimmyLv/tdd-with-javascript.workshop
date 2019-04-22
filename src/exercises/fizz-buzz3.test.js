import { fizzBuzz } from './fizzBuzz3'

describe('Test FizzBuzz', () => {
  // given
  const testCases = test.each`
    number | expected
    ${1}   | ${'1'}
    ${3}   | ${'Fizz'}
    ${5}   | ${'Buzz'}
    ${15}  | ${'FizzBuzz'}
    ${31}  | ${'Fizz'}
    ${51}  | ${'FizzBuzz'}
    ${98}  | ${'98'}
    ${100} | ${'Buzz'}
  `
  testCases(
    'returns $expected when given number $number',
    ({ number, expected }) => {
      // when
      const result = fizzBuzz(number)
      // then
      expect(result).toBe(expected)
    })

  it('should error when not given number', () => {
    const result = () => fizzBuzz('string')
    expect(result).toThrowError('Please input number!')
  })
})
