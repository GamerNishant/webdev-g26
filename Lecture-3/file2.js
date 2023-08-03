 // string
 let str = ''
 let str1 = 'A'
 let str2 = 'Hello'
 let str3 = "Nishant"

 console.log(typeof str)
 console.log(typeof str1)
 console.log(typeof str2)
 console.log(typeof str3)

 // number
 let n1 = 10
 let n2 = 10.11
 let n3 = Infinity
 let n4 = NaN
 
 console.log(typeof n1);
 console.log(typeof n2);
 console.log(typeof n3);
 console.log(typeof n4);

 // boolean
let b1 = true;
let b2 = false;

console.log(typeof b1);
console.log(typeof b2);

 // undefined
let a ;
console.log(a);
console.log(typeof a);

// functions
function change(){
    console.log("change");
}

console.log(typeof change);

 // object
let f = null;
console.log(typeof f)


let arrI = [1, 2, 3];
let arrB = [true, false, true, false];
let arrF = [10.1, 10.2, 10.3];

console.log(typeof arrI);
console.log(typeof arrB);
console.log(typeof arrF);


for(let i = 0; i<arrI.length; i++)
{
    str += arrI[i] + ' ';
}

console.log(str);
console.log(typeof str);


