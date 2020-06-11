/* Rounds up decimals to one. Example: 20.0 -> 20, 21.324 -> 21.3 */
export function decimal(n) {
  const number = Number(n);
  if (!n) {
    return 0;
  }

  const result = number - Math.floor(number);
  const isItDecimal = result !== 0;

  return isItDecimal ? number.toFixed(1) : number.toFixed(0);
}
