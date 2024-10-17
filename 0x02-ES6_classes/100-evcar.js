export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Clone method
  cloneCar() {
    // Clone method that returns a new instance of the same class
    const Species = this.constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }

  // Static method for Symbol.species
  static get [Symbol.species]() {
    return this; // By default, return the constructor of the current class
  }
}
