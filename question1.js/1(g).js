// Anonymous function
const removeDuplicates = function(arr) {
    return [...new Set(arr)];
};

// IIFE
const uniqueArray = (function(arr) {
    return [...new Set(arr)];
})([1, 2, 2, 3, 3, 4, 5]);

console.log(uniqueArray); 
