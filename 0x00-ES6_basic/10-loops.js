export default function appendToEachArrayValue(array, appendString) {
  // Create a new array to avoid mutating the original array
  const updatedArray = [];

  for (const value of array) {
    updatedArray.push(appendString + value);
  }

  return updatedArray;
}
