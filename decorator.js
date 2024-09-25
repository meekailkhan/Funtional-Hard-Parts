// jab hum koi function banate hai to use save karne ke bad directly modify nhi kiya ja sakta use modify karne ke liye hum aik naya function banate hai jise decorator kehte hai 
// decorator original function ko change karta hai 

// decorator function
function oncify(converMe){
    let counter = 0;
    function inner(input){
        if(counter === 0){
            let output = multiplyBy2(input);
            counter++;
            return output
        }else{
            return "you've already called it one time"
        }
    }
    return inner
}

const multiplyBy2 = num => num * 2;

const oncifiedMultiplyBy2 = oncify(multiplyBy2);

console.log(oncifiedMultiplyBy2(10)) // 20
console.log(oncifiedMultiplyBy2(7))  // you've already called it one time