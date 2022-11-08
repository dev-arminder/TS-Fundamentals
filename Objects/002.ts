/* 
 * Union Types in TS
 */

function printId(id: number | string){
  console.log('Id is -' + id);
}

printId(43);
printId("421")

// Type Narrowing with union types
function welcomePeople(x: Array<string> | string) {
   if(Array.isArray(x)){
     console.log(`Welcome - ${x.join('  ')}`)
   } else {
    console.log(`Welcome ${x}`)
   }
}

welcomePeople("Naresh");
welcomePeople(["Arminder", "Gukki"])