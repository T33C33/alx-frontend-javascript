export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // The [Symbol.species] static getter to return the current constructor
  static get [Symbol.species]() {
    return this;
  }

  // Method to clone the car
  cloneCar() {
    // Creates a new instance of the class (or subclass)
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
