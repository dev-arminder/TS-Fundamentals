// Primitive Types - TS
// string - String Values - "Heello",
// number - numerical values - 69,
// boolean - true or false

// To Specifiy type of an array - [1,2,3] - syntax number[] or You 
// can use Array<number> 


// Type Annotations on Variables - always on right side of variable's name
let myName: string = "Alice" 


// Functions - primary means to passing data around in JS

// Parameter Type Annotations
// types come after name
function hello(name: string){
    console.log(`Hello ${name} !!!!!`);
}

// Even if don't have type annotations on your parameter, TS still check for right numbes of parameters

// Return Type Annotations - after parameter List

// This Function Must have to return number
function getFavNumber(): number {
    return 26;
}

// Anonymous Function
// When A Function appears in a place where TS can determine how it's going to be called
// the params of that function are automatically gives types
// Same with Arrow Function

const names = ["Alice", "Bob"];

names.forEach(function (s){
    console.log(s.toUppercase());
})


// Objects
// To define an Object type we simply list it's properties and their types
