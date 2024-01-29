const fs = require('fs');

async function countStudents(path) {
  const prom = await fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const list = data.split('\n')
      .slice(1)
      .map((el) => el.split(','))
      .filter((el) => el.length > 1);

    console.log(`Number of students: ${list.length}`);

    const uniqueObj = {};

    list.forEach((el) => {
      if (el[3] in uniqueObj) {
        uniqueObj[el[3]].push(el[0]);
      } else {
        uniqueObj[el[3]] = [el[0]];
      }
    });

    for (const [key, value] of Object.entries(uniqueObj)) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  });
  return prom;
}

module.exports = countStudents;
