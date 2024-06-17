function getOnlyNumbers(arrayOnAnyValues) {
  const result = arrayOnAnyValues.filter(function(value) {
    return typeof value === 'number' && !isNaN(value);
  });
  return result;
}
const arr = [NaN, 1, true, 5, "hello", undefined, 15.5, {}, []];
const numbersOnly = getOnlyNumbers(arr);
console.log(numbersOnly); // [1, 5, 15.5]
