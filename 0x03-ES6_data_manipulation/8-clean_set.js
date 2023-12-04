export default function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const setFiltered = Array.from(set).filter((el) => (typeof el === 'string' && el.startsWith(startString)));
  const setRemoved = setFiltered.map((el) => el.slice(startString.length));
  return setRemoved.join('-');
}
