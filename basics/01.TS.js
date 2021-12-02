"use strict";
exports.__esModule = true;
// Install TS compilter using
// npm install -g typescript
console.log("hello-world from TS");
// Let's make an error
// function greet(person : string, date : Date) {
//     console.log(`Hello ${person}, today id ${date.toDateString()}`)
//     return 
// }
var greet = function (person, date) {
    console.log("Hello ".concat(person, ", today id ").concat(date.toDateString()));
};
// greet("Branson") - error
// greet("Bransonn", "01-dec") - error - Second Argrument is not of type Date
greet("Bransonn", new Date());
