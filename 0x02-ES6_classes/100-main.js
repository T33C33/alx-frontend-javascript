import EVCar from "./100-evcar.js";

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

/*
Import Car from 10-car.js.

Implement a class named EVCar that extends the Car class:

    Constructor attributes:
        brand (String)
        motor (String)
        color (String)
        range (String)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an instance of Car instead of EVCar.
*/
