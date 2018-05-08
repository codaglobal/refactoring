const server = require('./server');
const expect = require('chai').expect;

describe('Cannary test to validate framework.', () => {
  it('true is true', () => {
    expect(true).to.eq(true);
  });
});

describe('Server module', () => {
  it('server.stack should be an array', () => {
    expect(server.start).to.be.a('function');
  });

  it('server.start should equal 1234', () => {
    expect(server.start()).to.equal(1234);
  });
});
