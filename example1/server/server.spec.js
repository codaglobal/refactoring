'use strict'

const server = require('./server')
const expect = require('chai').expect


describe('Cannary test to validate framework.', () => {
  describe('true should always be true', () => {
    it('true is true', () => {
      expect(true).to.eq(true)
    });
  });
});

describe('Server module', () => {
  describe('Server module should have a start function', () => {
    it('server.start is a function', () => {
      expect(server.start).to.be.a('function')
    });
  });

  describe('Server.start should have a default value of 1234', () => {
    it('server.start should equal 1234', () => {
      expect(server.start()).to.equal(1234)
    });
  });
});
