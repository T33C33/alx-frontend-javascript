/* export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  if (position >= length) {
    throw Error('Position outside range');
  }
  int8View[position] = value;
  return int8View;
}
*/
function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  dataView.setInt8(position, value);
  return dataView;
}
export default createInt8TypedArray;
