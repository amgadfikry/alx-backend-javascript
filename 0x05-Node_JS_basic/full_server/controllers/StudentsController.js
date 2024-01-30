import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const database = process.argv[2];
      response.status(200);
      const data = await readDatabase(database);
      const result = [];
      for (const key of Object.keys(data).sort()) {
        const value = data[key];
        result.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      response.write('This is the list of our students\n');
      response.write(result.join('\n'));
      response.send();
    } catch (err) {
      response.status(500);
      response.write(err.message);
      response.send();
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500);
      response.write('Major parameter must be CS or SWE');
      response.send();
    } else {
      try {
        const database = process.argv[2];
        response.status(200);
        const data = await readDatabase(database);
        const result = data[major];
        response.write('List: ');
        response.write(result.join(', '));
        response.send();
      } catch (err) {
        response.status(500);
        response.write(err.message);
        response.send();
      }
    }
  }
}

export default StudentsController;
