const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const path = url.parse(req.url).pathname;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (path === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (path === '/students') {
    const name = process.argv[2];
    const data = await countStudents(name);
    data.unshift('This is the list of our students');
    res.end(data.join('\n'));
  }
});

app.listen(1245);

module.exports = app;
