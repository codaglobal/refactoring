'use strict';

const Palindrome = require('./palindrome')
const expect = require('chai').expect

describe("Palindrome validator", () => {
    describe("# Palindrome.isPalindrome should be a function", () => {
        it('isPalindrome is a function', () => {
            expect(Palindrome.isPalindrome).to.be.a('function')
          })
    })

    describe("# Empty string should not be a palindrome", () => {
        it("empty is not a palindrome", () => {
            expect(Palindrome.isPalindrome("")).to.equal(false)
        })
    })

    describe("# 'toot' should be a palindrome", () => {
        it("toot is a palindrome", () => {
            expect(Palindrome.isPalindrome("toot")).to.equal(true)
        })
    })

    describe("# 'tooth' should not be a palindrome", () => {
        it("tooth is not a palindrome", () => {
            expect(Palindrome.isPalindrome("tooth")).to.equal(false)
        })
    })

    describe("# '12321' should be a palindrome", () => {
        it("12321 is a palindrome", () => {
            expect(Palindrome.isPalindrome(12321)).to.equal(true)
        })
    })
})
