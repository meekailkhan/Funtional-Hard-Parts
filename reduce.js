let array1 = [1,2,3,4,5];

function reduce(arr,howToCombine,buildingUp){
    for(let i = 0 ; i < arr.length ; i++){
        buildingUp = howToCombine(buildingUp,arr[i])
    }
    return buildingUp
}

let add = (a,b)=> a+b ;

let summed = reduce(array1,add,0);
console.log(summed)