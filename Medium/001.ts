/* 
 * Void And Never
 */

/* Void - Used Along with function that doesn't return anything. Function those casue side effects */

function  printName(name: string): void{
  console.log(`Hii! ${name}`);
}

function printUpTo10(): void{
  for(let i = 1; i <= 10; i++){
    console.log(`${i}  `);
  }
}

/* Never -  A function that never gonna return something*/
function throwErr(err: string): never{
   throw new Error(err)
}
