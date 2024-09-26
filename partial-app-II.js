const multiply = (a,b) => a * b;
const addition = (a,b) => a + b;
const divide = (a,b) => b / a;


function partialApplyManupulation(fn,a){
    return function inner(b){
        return fn(a,b)
    }
}

const multiplyBy2 = partialApplyManupulation(multiply,2);
const add3 = partialApplyManupulation(addition,3);
const divideBy5 = partialApplyManupulation(divide,5)

console.log(multiplyBy2(5)) // 10
console.log(multiplyBy2(3)) // 6

console.log(add3(5)) // 8
console.log(add3(7)) // 10

console.log(divideBy5(25)) // 5
console.log(divideBy5(15)) // 3
