// Static Type System describes the shapes and behaviors of what are values will be when we gonna run our program

const message = "Hello World"
// Message is not callable
// JS Would inform about this error at run time but TS could inform you while writing code in editor

message();


// Why TS
// Js Specification says that trying to call something that isn't
// callable should throw an error. Which is not the case always
// - Accessing a property that doesn't exist on an object returns undefined but don't gave us any error msg

// But on the other hand a Static type checking system has to make the call over what code should be flagged as an error in its system.

// in TS following Code produces error 
const user = {
    name: "Daniel"
}

user.location;
// Error - location doesn't exist on type user
// Typescript cathes a lot of legitimate bugs
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
// This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}


// Another useCase of TS 
// TS can catch the bugs when we make mistake in our code. But
//  it also prevent us from making those bugs in first place  using type checker system


