export default function hasValuesFromArray(set, inputArr) {
  return inputArr.every((element) => set.has(element));
}
