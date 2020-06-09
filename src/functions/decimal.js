/* Rounds up decimals to one. Example: 20.0 -> 20, 21.324 -> 21.3 */
export function decimal(n) {
  if (n) {
    const result = n - Math.floor(n);
    const isItDecimal = result !== 0;

    return isItDecimal ? n.toFixed(1) : n.toFixed(0);
  }
}
