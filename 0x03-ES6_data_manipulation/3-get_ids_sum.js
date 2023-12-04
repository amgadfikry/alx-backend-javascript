export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, el) => acc + el.id, 0);
}
