/*
 * Type Aliases and interface
 */

type Point = {
  x: number;
  y: number;
  z?: number;
};

function printCord(pt: Point) {
  if (pt.z) {
    console.log(`X Cordinate is - ${pt.x}`);
    console.log(`Y Cordinate is - ${pt.y}`);
    console.log(`Z Cordinate is - ${pt.z}`);
  } else {
    console.log(`X Cordinate is - ${pt.x}`);
    console.log(`X Cordinate is - ${pt.y}`);
  }
}

interface AnotherObj {
  name: string;
  age: number;
  school: string;
}