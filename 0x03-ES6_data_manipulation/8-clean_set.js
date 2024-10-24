function cleanSet(set, startString) {
  // Check if startString is a string, otherwise return an empty string
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  // Filter and map values that start with the startString
  const result = [...set]
    .filter(
      (value) => typeof value === 'string' && value.startsWith(startString),
    ) // Ensure value is a string and starts with startString
    .map((value) => value.slice(startString.length)) // Remove the startString from the value
    .join('-'); // Join the resulting strings with '-'

  return result;
}

// Export the function for use in other modules
export default cleanSet;
