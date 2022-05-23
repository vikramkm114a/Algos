const arr = [ 2, 5, 5, 3, 2, 7, 4, 9, 9, 11];

function sumUniqueValues(arr) {
    let sum = 0;
    for (let i =0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            continue;
        };
        sum += arr[i]
    };
    return sum;
};
console.log(sumUniqueValues(arr));