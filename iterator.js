console.time("iterator");

function* range(from, to, step = 1) {
    let value = from;
    while (value <= to) {
        yield value;
        value += step;
    }
}


let sum = 0;
for (const value of range(1, 10_000_000)) {
    sum += value;
}

console.log("Sum: ", sum);
console.timeEnd('iterator');