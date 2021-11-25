// The main benefit of TS is that it can highlight unexpected behavior in your JS code and lowering the chance of bugs.
let helloworld = "Hello World";

// Defining types
// interface declaration
interface User {
  name: String; // ENDS WITH SEMICOLON
  id: number;
}

class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

// Typscript - new primitives
// any - ( allow anything )
// unknown - (ensure someone using this type declares what tyoe is)
// never - (it's not possible that this type could happen)

// COMPOSING TYPES
// you can create complex types by combining simple ones
//  - Unions
//  - Generics

// UNIONS
// With union you can declare that a type could be one of many types
//  e.g. a boolean type as being either true or false

type MyBool = true | false;
type windowStats = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";

// a function that take an array or a string
type param = string | string[];
function getLength(obj: param) {
  return obj.length;
}

// anotherFunc that return different values based upon different input

function arrWrapper(obj: string | string[]) {
  if (typeof obj === "string") return [obj];
  return obj;
}

// GENERICS - provide variables to types
// An array without generics could contain anything, An array with generics can describe
//  the value that array contains

type stringArr = Array<string>;

// Structural typeSystem
// In Strucutal type System if two objects have same shape, they are considered to be of same type

interface Point {
  x: Number;
  y: Number;
}

function logPoint(pt: Point) {
  console.log(`${pt.x} -- ${pt.y}`);
}

const point = {
  x: 12,
  y: 26
};
logPoint(point);
