import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(a) {
    if (typeof a !== 'number') {
      throw new TypeError('Amount must be number');
    }
    this._amount = a;
  }

  set currency(c) {
    if (!(c instanceof Currency)) {
      throw new TypeError('Currency must be instance of currency class');
    }
    this._currency = c;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRate must be number');
    }
    return amount * conversionRate;
  }
}
