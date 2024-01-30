class AppController {
  static getHomepage(request, response) {
    response.status(200);
    response.write('Hello Holberton School!');
    response.send();
  }
}

export default AppController;
