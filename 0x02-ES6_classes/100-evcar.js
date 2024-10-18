import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Clone method
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
    // Clone method that returns a new instance of the same class
    /* const Species = this.constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color); */
  }

  // Static method for Symbol.species
  /* static get [Symbol.species]() {
    return this; // By default, return the constructor of the current class
  } */
}
