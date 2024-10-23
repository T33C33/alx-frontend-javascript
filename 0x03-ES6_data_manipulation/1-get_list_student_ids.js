export default function getListStudentIds(inputArr) {
  if (inputArr === undefined || !Array.isArray(inputArr)) {
    return [];
  }
  return inputArr.map((element) => element.id);
}
