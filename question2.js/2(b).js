const convertToTitleCaps = arr => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

const titleCaps = convertToTitleCaps(["hello", "world"]);
console.log(titleCaps);
