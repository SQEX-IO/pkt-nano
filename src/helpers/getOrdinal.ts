/**
 *
 * @param num number to get ordinal version of
 * @returns string representation of number with ordinal, eg "21st"
 *
 * @author Jack Newton
 */
export default function getOrdinal(num: number): string{

    if (num === 11 || num === 12 || num === 13) return `${num}th`

    let lastDigit = num%10;

    switch (lastDigit) {
        case 1: return `${num}st`
        case 2: return `${num}nd`
        case 3: return `${num}rd`
        default:  return `${num}th`
    }
}