import { fizzBuzz } from './fizzBuzz5'

describe('Test FizzBuzz', () => {
  const testCases = it.each`
      input  | expected
      ${1}   | ${'1'}
      ${3}   | ${'Fizz'}
      ${5}   | ${'Buzz'}
      ${15}   | ${'FizzBuzz'}
      ${100}   | ${'Buzz'}
    `
  testCases(
    'should return $expected when given $input',
    ({ input, expected }) => {
      // when
      const result = fizzBuzz(input)
      // then
      expect(result).toBe(expected)
    })

});
