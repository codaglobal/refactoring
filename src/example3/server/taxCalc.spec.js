
const Calc = require('./taxCalc').default;
const expect = require('chai').expect;

describe('Tax Calculator Module', () => {
  let calc;

  beforeEach('Create a new calculator', () => {
    calc = new Calc();
  });

  afterEach('Destroy calculator', () => {
    calc = undefined;
  });

  it('getTotal for $1 in NY should return $1.07', () => {
    expect(calc.getTotal(1, 'NY')).to.equal(1.07);
  });

  it('getTotal for $2.50 in PA should return $2.65', () => {
    expect(calc.getTotal(2.50, 'PA')).to.equal(2.65);
  });

});
