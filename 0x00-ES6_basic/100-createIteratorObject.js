export default function createIteratorObject(report) {
  const all = [];
  const values = Object.values(report.allEmployees);
  for (const emp of values) {
    all.push(...emp);
  }
  return all;
}
