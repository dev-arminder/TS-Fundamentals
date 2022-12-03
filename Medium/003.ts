/* 
   Type Intersection
 */
interface Student {
  name: string;
  age: number;
  school: string;
  class: string;
}

interface Professional {
  name: string;
  age: number;
  company: string;
}

// Combine both props
type Person = Student & Professional;
let raman: Person = {
  name: "Raman",
  age: 40,
  school: "MSP",
  class: "12th",
  company: "Paxcom",
};
