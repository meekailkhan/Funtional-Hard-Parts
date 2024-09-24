function outerFuntion(){
    let counter = 0;
    const innerFn = ()=>{
        counter++;
        console.log(counter)
    }
    const newInnerFn = ()=>{
        counter++;
        console.log(counter)
    }
    let obj = {
        fn1 : innerFn,
        fn2 : newInnerFn
    }
    return obj
}

let output = outerFuntion();

output.fn1() // 1
output.fn1() // 2

output.fn2() // 3
output.fn2() // 4