// var let const

// const : constant 
const c = 10;
console.log(c);
// c = 11;
// console.log(c);

var e = 100;
console.log(e);

let d = 112;
console.log(d);


if(true){
// var : parent scope
    var a = 10;
// let : block scope
    let b = 11;
    g = 20;
    // c = 1000;
}

console.log(a);
// console.log(b);
console.log(g);
// console.log(c);

// Hoisting : phenomenon of using variables first

  
console.log(f);
let f;