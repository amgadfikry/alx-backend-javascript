const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  try {
    const database = process.argv[2];
    const data = await countStudents(database);
    res.write(data.join('\n'));
    res.send();
  } catch (err) {
    res.write(err.message);
    res.send();
  }
});

app.listen(1245);

module.exports = app;
