const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const path = url.parse(req.url).pathname;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (path === '/') {
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
    const name = process.argv[2];
    res.write('This is the list of our students\n');

    try {
      const data = await countStudents(name);
      res.end(data.join('\n'));
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(1245);

module.exports = app;
