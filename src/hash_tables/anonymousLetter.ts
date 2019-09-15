import { filter, reduce } from '@/std'

const letterOnlyRegex = new RegExp('[A-Za-z]')

function isLetter(ch: string) {
  return letterOnlyRegex.test(ch)
}

function splitText(text: string) {
  const allLetters = text.split('')
  const onlyTextLetters = filter((ch) => {
    return !!ch && isLetter(ch)
  }, allLetters)
  return onlyTextLetters
}

function countLetters(letters: string[]) {
  return reduce(
    (acc, ch) => {
      if (!acc[ch]) {
        acc[ch] = 1
      }
      acc[ch] += 1
      return acc
    },
    letters,
    {} as { [key: string]: number },
  )
}

export default function anonymousLetter(
  letter: string,
  magazine: string,
): boolean {
  const letterLetters = splitText(letter)
  const magazineLetters = splitText(magazine)

  if (letterLetters.length > magazineLetters.length) {
    return false
  }

  const llc = countLetters(letterLetters)
  const mmc = countLetters(magazineLetters)

  for (const ch of letterLetters) {
    if (llc[ch] > mmc[ch]) {
      return false
    }
  }

  return true
}
