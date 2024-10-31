/// <reference path="../js/crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "../js/crud";

// Define a row object with type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and get a RowID
const newRowID: RowID = CRUD.insertRow(row);

// Define an updated row with an added age property
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

// Call the updateRow and deleteRow functions
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
