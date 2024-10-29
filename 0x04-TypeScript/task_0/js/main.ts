interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Tikuochi",
  lastName: "Iheukwumere",
  age: 28,
  location: "PortHarcourt",
};

const student2: Student = {
  firstName: "Crystal",
  lastName: "Iheukwumere",
  age: 30,
  location: "Lagos",
};

const studentsList: Array<Student> = [student1, student2];

const body = document.querySelector("body"); // Gets the body element from DOM alterative was to use documet.body
const table = document.createElement("table");

studentsList.forEach((student) => {
  // Loop through the studentsList array
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName; // alternative was to use document.createTextNode(student.firstName)

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

if (body) {
  body.appendChild(table);
}
