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

// E.g function that takes point like object 

function printCode(pt : {x : number, y : number}){
    console.log(`X - Cordinate is ${pt.x}`);
    console.log(`Y cordinate is ${pt.y}`)
}
// type part of each property is optional - default will be any
// Optional Properties


// To Make a property optional add a ? after the property name
// function print(obj: {first: string, last?: string}){

// }



// Union types - build new types out of existing ones using operators

// Union Type is type formed from two or more other types , representing values
// that may be of any of those types
//  use | to form union types

// function printId(id: number | string){
//     console.log(`Your Id is: ${id}`)
// }
// printId(45);
// printId("45")


// TS only allow you to do things with union if that thing is valid for every memeber of the union
// E.g if you have union of string | number you cann't use , methods that are only on string

// Solution to above problem is narrow the union with Code 
//  - NARROWING occurs when TS can deduce a more speific type for a value based on the strucutre of code

function printId(id: number | string){
    // Narrowing based upon type
    if ( typeof id === "string") console.log(id.toUpperCase());
    else console.log(id)
}

function welcomePeople(x: string[] | string){
    // Narrowing based upon X is array of string or not
    if(Array.isArray(x)) console.log('There are a lot of people')
    else console.log('You are alone')
}

