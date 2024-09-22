// JavaScript mein "gotchas" wo tricky situations ya unexpected behaviors hote hain jo programming karte waqt naya confusion ya bugs create kar sakte hain. Yeh wo points hain jo beginners ya kabhi-kabhi experienced developers ko bhi dikkat mein daal dete hain, 

// kuch common gotchas jo samjhne wali hai

// 1.Type coercion (automatic type convertion)
console.log(1 + "2") // "12"
console.log(1 - "2"); // 2


// 2.Variable hoisting
console.log(myVar)  // undefinde
var myVar = 10;


// 3.This keyword
const obj = {
    name : "meekail",
    getName : function() {
        return this.name
    }
}

const name1 = obj.getName();
const name2 = obj.getName

console.log(name1) // "meekail"
console.log(name2()) // undefined


// 4.comparing == and ===
console.log(0 == "") // true
console.log(0 === "") // false


// 5.Closure Gotcha (looping with var)
for(var i = 0 ; i < 3 ; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)  
} // print three time 3

for(let i = 0 ; i < 3 ; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
} // print 1,2 and 3 
