

// Anonymous function

const convertToTitleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

// IIFE
const titleCaps = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})(["hello", "world"]);

console.log(titleCaps); 
