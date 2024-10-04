export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator into an array to easily join the names
  const employeesArray = [...reportWithIterator];

  // Join the employee names with the separator " | "
  return employeesArray.join(' | ');
}
