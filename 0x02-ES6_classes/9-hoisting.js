// Define the HolbertonClass
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

// Create instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Define the StudentHolberton class
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    // Fix: Added holbertonClass parameter
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass; // Fix: Use the passed holbertonClass parameter
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass; // Fix: Changed to return the correct property
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`; // Fix: Corrected "self" to "this"
  }
}

// Create student instances
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export the list of students
export const listOfStudents = [
  student1,
  student2,
  student3,
  student4,
  student5,
];
