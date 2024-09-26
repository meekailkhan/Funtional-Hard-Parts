// partial application wo techniques hai jisse hum kisi function ke argument ko pre-filed kar sakte hai aur kuch ko bad ke liye chodte hai

function multiply(a,b){
    return a * b
};

function partialApplyMultiply(a){
    return function inner(b){
        return multiply(a,b)
    }
}

const multiplyBy2 = partialApplyMultiply(2);
const multiplyBy3 = partialApplyMultiply(3);


console.log(multiplyBy2(5)) // 10
console.log(multiplyBy2(3)) // 6

console.log(multiplyBy3(5)) // 15
console.log(multiplyBy3(3)) // 9


