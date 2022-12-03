/* 
  Type Aliases
 */

type Fruit = string | number;
let apple: Fruit;
let kasmiriApple: string | number = "Abc";
apple = kasmiriApple;

type FruitObj = {
  name: string;
  color: string;
  sweetness?: string;
};

type Cordinates2D = [number, number];

const fruit: FruitObj = { name: "apple", color: "red" };

export {};
