export default function groceriesList() {
  const data = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  const map = new Map();
  for (const el of data) {
    map.set(el[0], el[1]);
  }
  return map;
}
