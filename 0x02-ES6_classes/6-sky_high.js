import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  get sqft() {
    return this._sqft;
  }

  /* set floors(value) {
    this._floors = value;
  } */

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
