'use strict';

const calculator = require('./taxCalc')
const expect = require('chai').expect

describe('Tax Calculator Module', () => {
    describe('Calculator should have a getTax function', () => {
        it('getTax is a function', () => {
            expect(calculator.getTax).to.be.a('function')
        });
    });
});