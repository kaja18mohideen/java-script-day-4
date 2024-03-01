// Anonymous function
const getPrimeNumbers = function(arr) {
    return arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};

// IIFE
const primes = (function(arr) {
    return arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
})([2, 3, 5, 7, 11]);

console.log(primes); 
