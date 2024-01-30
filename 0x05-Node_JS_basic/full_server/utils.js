import fs from 'fs';

async function readDatabase(path) {
  try {
    const data = await fs.readFileSync(path, 'utf8');

    const list = data.split('\n')
      .slice(1)
      .map((el) => el.split(','))
      .filter((el) => el.length > 1);

    const uniqueObj = {};

    list.forEach((el) => {
      if (el[3] in uniqueObj) {
        uniqueObj[el[3]].push(el[0]);
      } else {
        uniqueObj[el[3]] = [el[0]];
      }
    });

    return uniqueObj;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
