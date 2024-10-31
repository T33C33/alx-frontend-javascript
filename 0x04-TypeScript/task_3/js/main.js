"use strict";
/// <reference path="../js/crud.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("../js/crud");
// Define a row object with type RowElement
var row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
// Insert the row and get a RowID
var newRowID = CRUD.insertRow(row);
// Define an updated row with an added age property
var updatedRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
};
// Call the updateRow and deleteRow functions
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
