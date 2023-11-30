export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = n;
  }

  get code() {
    return this._code;
  }

  set code(c) {
    if (typeof c !== 'string') {
      throw new TypeError('code must be string');
    }
    this._code = c;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
