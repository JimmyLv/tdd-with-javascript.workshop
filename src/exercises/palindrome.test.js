import { isPalindrome } from './palindrome'

describe('testing for each one ', () => {
  const cases = [
    ['mom', true],
    ['dad', true],
    ['jimmy', false],
    [' ', false],
    ['', false],
  ]

  cases.forEach(([word, result]) => {
    it(`should return ${result} when given argument ${word}`, () => {
      expect(isPalindrome(word)).toBe(result)
    })
  })

  it('should throw exception when word is missing', () => {
    const actual = () => {
      isPalindrome()
    }
    expect(actual).toThrowError('Invalid word')
  })
})
