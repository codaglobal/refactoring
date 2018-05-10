const Stack = require('./server').default;
import { expect } from "chai";

describe('Cannary test to validate framework.', () => {
  it('true is true', () => {
    expect(true).to.eq(true);
  });
});

describe('Stack Server', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  afterEach(() => {
    stack = undefined;
  });

  it('Can create a new stack', () => {
    expect(stack).to.exist;
  });

  it('New stack starts with size of 0', () => {
    expect(stack.getSize()).to.equal(0);
  });

  it('After one push, size is 1', () => {
    expect(stack.push(1)).to.equal(1);
  });

  it('After two pushes, size is 2', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.getSize()).to.equal(2);
  });

  it('After one push and one pop, size is 0', () => {
    stack.push(1);
    stack.pop();
    expect(stack.getSize()).to.equal(0);
  });

  it('When two values are pushed then one is popped, size is 1', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.getSize()).to.equal(1);
  });

  it('When 1 is pushed 1 is popped', () => {
    stack.push(1);
    expect(stack.pop()).to.equal(1);
  });

  it('When 1 then 2 is pushed, 2 then 1 is popped', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).to.equal(2);
    expect(stack.pop()).to.equal(1);
  });
});
