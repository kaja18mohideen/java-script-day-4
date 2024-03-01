const sumArray = arr => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

const sum = sumArray([1, 2, 3, 4, 5]);
console.log("Sum:", sum);
