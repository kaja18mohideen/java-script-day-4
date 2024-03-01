const getPrimeNumbers = arr => {
    return arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};

const primes = getPrimeNumbers([1, 2, 3, 4, 5]);
console.log("Prime numbers:", primes);
