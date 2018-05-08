
const calculator = require('./taxCalc');
const expect = require('chai').expect;

describe('Tax Calculator Module', () => {
  let price;

  before('Set variable values', () => {
    price = 1;
  });

  it('getTax for $1 in PA should return $.06', () => {
    expect(calculator.getTax(1, 'PA')).to.equal(0.06);
  });

  it('getTax for $1 in NY should return $.07', () => {
    expect(calculator.getTax(1, 'NY')).to.equal(0.07);
  });

  it('getTax for $0 everywhere should return $.00', () => {
    expect(calculator.getTax(0, 'NY')).to.equal(0);
  });

  it('getTotal for $1 in NY should return $1.07', () => {
    expect(calculator.getTotal(price, calculator.getTax(price, 'NY'))).to.equal(1.07);
  });
});
