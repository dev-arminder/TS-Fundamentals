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
