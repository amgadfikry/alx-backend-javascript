export default function getListStudents() {
  const data = [
    ['Guillaume', 1, 'San Francisco'],
    ['James', 2, 'Columbia'],
    ['Serena', 5, 'San Francisco'],
  ];
  const newData = data.map((el) => ({
    id: el[1],
    firstName: el[0],
    location: el[2],
  }));
  return newData;
}
