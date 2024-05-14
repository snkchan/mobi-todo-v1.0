/**
 *@description 문자열을 입력받아 첫 문자만 대문자로 변환해줍니다.
 */
export const capitalize = ({ word }: { word: string }): string => {
  const wordArr = word.split("")
  wordArr[0] = wordArr[0].toUpperCase()
  return wordArr.join("")
}
