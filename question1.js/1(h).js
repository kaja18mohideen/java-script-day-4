// Anonymous function
const rotateArray = function(arr, k) {
    const rotation = k % arr.length;
    return [...arr.slice(rotation), ...arr.slice(0, rotation)];
};

// IIFE
const rotatedArray = (function(arr, k) {
    const rotation = k % arr.length;
    return [...arr.slice(rotation), ...arr.slice(0, rotation)];
})([1, 2, 3, 4, 5], 2);

console.log(rotatedArray);