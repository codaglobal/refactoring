const Palindrome = require('./palindrome');
const expect = require('chai').expect;

describe("Palindrome validator", () => {
  it('isPalindrome is a function', () => {
    expect(Palindrome.isPalindrome).to.be.a('function');
  });

  it("empty is not a palindrome", () => {
    expect(Palindrome.isPalindrome("")).to.equal(false);
  });

  it("toot is a palindrome", () => {
    expect(Palindrome.isPalindrome("toot")).to.equal(true);
  });

  it("tooth is not a palindrome", () => {
    expect(Palindrome.isPalindrome("tooth")).to.equal(false);
  });

  it("12321 is a palindrome", () => {
    expect(Palindrome.isPalindrome(12321)).to.equal(true);
  });
});
