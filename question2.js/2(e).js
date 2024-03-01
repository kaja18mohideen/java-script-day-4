const getPalindromes = arr => {
    return arr.filter(str => str === str.split('').reverse().join(''));
};

const palindromes = getPalindromes(["madam", "hello", "level", "world"]);
console.log("Palindromes:", palindromes);
