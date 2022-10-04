import React from 'react'

let name: string;
let age: number | string; // age can be number or string
let isTrue: boolean;
let hobbies: string[];
let role: [number, string];
let personName: unknown; // unknown is better than nothing

function printName(name: string) {
  console.log(name);
}

let printAge: (age: number) => never; //void returns undefined but never returns nothing

// type Person = {
//   name: string;
//   age?: number;  // ? means optional
// };

// let person: Person = {
//   name: "Berat",
//   age: 23,
// };

// let lotsOfPeople: Person[];

interface Person {
  // same as type in the 17th line.
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}

const TypeExamples = () => {
  return (
    <div>TypeExamples</div>
  )
}

export default TypeExamples
