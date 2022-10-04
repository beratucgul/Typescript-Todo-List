import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";


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

const App: React.FC = () => { 
  const [todo, setTodo] = useState<string>("")

  return <div className="App">
    <span className="heading">Taskify</span>
    <InputField />
  </div>;
}

export default App;
