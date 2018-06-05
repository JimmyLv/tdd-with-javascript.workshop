export function isPalindrome(word) {
  if (word === undefined) {
    throw new Error('Invalid word')
  }
  const isReversedWord =
    word
      .split('')
      .reverse()
      .join('') === word
  return word.trim().length > 0 && isReversedWord
}
