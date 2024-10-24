// Export the weakMap instance
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  let queryCount = weakMap.get(endpoint) || 0;

  // Increment the query count
  queryCount += 1;

  // Update the weakMap with the new count
  weakMap.set(endpoint, queryCount);

  // If query count is 5 or more, throw an error
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
