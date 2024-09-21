const multiplyBy2 = num => num * 2;
const add3 = num => num + 3;
const divideBy5 = num => num / 5;


const reduce = (array,howToCombine,buildingUp) => {
    for(let i = 0 ; i < array.length ; i++){
        buildingUp = howToCombine(buildingUp,array[i])
    }
    return buildingUp
}

const runFuntionOnInput = (input,fn) => {
    return fn(input)
}

const result = reduce([multiplyBy2,add3,divideBy5],runFuntionOnInput,11);

console.log(result);