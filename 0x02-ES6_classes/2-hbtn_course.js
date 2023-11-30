export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = n;
  }

  get length() {
    return this._length;
  }

  set length(l) {
    if (typeof l !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = l;
  }

  get students() {
    return this._students;
  }

  set students(s) {
    if (!Array.isArray(s) || s.every((st) => typeof st !== 'string')) {
      throw new TypeError('Students must be a array of strings');
    }
    this._students = s;
  }
}
