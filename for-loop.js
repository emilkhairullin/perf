console.time("for-loop");

let sum = 0;

for(let i = 1; i <= 10_000_000; i++){
    sum += i;
}

console.log("Sum: ", sum);
console.timeEnd('for-loop');