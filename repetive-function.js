function copyArrayAndManipulate(array,instruction){
    let output = [];
    for(let i = 0 ; i < array.length ; i++){
        output.push(instruction(array[i]))
    }

    return output
}

const multiplyByTwo = (input)=>{
    let result = input * 2;
    return result
}

let res = copyArrayAndManipulate([1,2,3,4],multiplyByTwo);
console.log(res)