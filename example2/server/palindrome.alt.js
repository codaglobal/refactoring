'use strict'

function isPalindrome(word) {
    if(word==null || word.length==0){
        return false;
    }
    let lastIndex=Math.ceil(word.length/2);
    for (let i = 0; i < lastIndex && i< word.length; i++) {
        if (word[i] != word[word.length-1-i]) {
            return false;
        }
     }
     return true;
}

module.exports = {
    isPalindrome
}