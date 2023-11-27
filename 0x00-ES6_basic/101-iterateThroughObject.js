export default function iterateThroughObject(reportWithIterator) {
  let full = '';
  for (const name of reportWithIterator) {
    full += name;
    if (reportWithIterator[reportWithIterator.length - 1] !== name) {
      full += ' | ';
    }
  }
  return full;
}
