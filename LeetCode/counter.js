const n = 10;
const calls = ["call", "call", "call"];

var createCounter = function (n) {
    let counter = n;
    return function () {
        console.log(counter++);
    }
}

const counter = createCounter(10);

const result = calls.map(() => counter());

console.log(result);