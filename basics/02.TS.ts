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

// Return Type Annotations
