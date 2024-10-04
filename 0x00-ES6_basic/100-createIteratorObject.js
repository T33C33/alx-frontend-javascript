export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeeList = [];

  // Loop through each department and add all employees to the employeeList
  for (const department in allEmployees) {
    if (Object.hasOwnProperty.call(allEmployees, department)) {
      employeeList.push(...allEmployees[department]);
    }
  }

  // Return an iterator for the employeeList
  return employeeList[Symbol.iterator]();
}
