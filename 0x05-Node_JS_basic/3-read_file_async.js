const fs = require('fs/promises');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const list = data.split('\n')
      .slice(1)
      .map((el) => el.split(','))
      .filter((el) => el.length > 1);

    const result = [`Number of students: ${list.length}`];

    const uniqueObj = {};

    list.forEach((el) => {
      if (el[3] in uniqueObj) {
        uniqueObj[el[3]].push(el[0]);
      } else {
        uniqueObj[el[3]] = [el[0]];
      }
    });

    for (const [key, value] of Object.entries(uniqueObj)) {
      result.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }

    console.log(result.join('\n'));
    return result.join('\n');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
