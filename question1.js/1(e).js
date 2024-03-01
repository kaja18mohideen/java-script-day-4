// Anonymous function
const getPalindromes = function(arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
};

// IIFE
const palindromes = (function(arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
})(["madam", "hello", "level", "world"]);

console.log(palindromes); 
