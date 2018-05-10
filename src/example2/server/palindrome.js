const isPalindrome = (input) => {
  let testString;

  if (typeof input !== 'string') {
    testString = input.toString();
  } else {
    testString = input;
  }

  if (testString.length === 0) return false;

  if (testString === null) return false;

  const len = testString.length;
  const array = testString.split('');
  const middle = Math.floor(len / 2);

  for (let i = 0; i < len; i++) {
    if (i === middle) break;
    if (array[i] !== array[(len - 1) - i]) return false;
  }

  return true;
};

module.exports = {
  isPalindrome,
};
