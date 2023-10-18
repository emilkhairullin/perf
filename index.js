console.time("array_from");

let numbers = Array.from({length: 10_000_000}, (x, y) => y + 1);

let sum = 0;

numbers.forEach(number => {
    sum += number;
})

console.log("Sum: ", sum);
console.timeEnd('array_from');