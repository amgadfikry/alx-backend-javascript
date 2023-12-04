export default function cleanSet(set, startString) {
	if (startString === '') {
		return
	}
  const setFiltered = Array.from(set).filter((el) => el.startsWith(startString));
  const setRemoved = setFiltered.map((el) => el.slice(startString.length));
  return setRemoved.join('-');
}
