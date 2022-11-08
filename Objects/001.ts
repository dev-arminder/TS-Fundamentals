/*  
 * Type annonation with Object
 */

function printCord(pt: {x: number; y: number}): void {
  console.log(`X Cordinate is - ${pt.x}`);
  console.log(`Y Cordinate is - ${pt.y}`);
}

printCord({ x: 5, y: 10 });

/* 
 * Object with optional Properties
 */

function getFullName(obj: {firstName: string; lastName?: string}): string{
   if(obj.lastName){
    return `${obj.firstName} ${obj.lastName}`
   } 
   return obj.firstName; 

}

getFullName({firstName: "Arminder"});
getFullName({firstName: "Arminder", lastName: "Singh"})