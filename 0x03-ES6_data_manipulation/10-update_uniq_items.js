function updateUniqueItems(map) {
  // Check if the input is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over each entry in the Map
  for (const [key, value] of map) {
    // If the quantity is 1, update it to 100
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map; // Return the updated map
}

// Export the function for use in other modules
export default updateUniqueItems;
