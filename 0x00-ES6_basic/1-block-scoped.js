export default function taskBlock(trueOrFalse) {
  if (trueOrFalse === true) {
    const task = !trueOrFalse;
    const task2 = trueOrFalse;

    return [task, task2];
  }
  const task = trueOrFalse;
  const task2 = !trueOrFalse;

  return [task, task2];
}
