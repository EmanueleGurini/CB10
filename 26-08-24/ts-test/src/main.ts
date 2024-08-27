//import { sum } from "./lib";
//import * as readline from "readline";

/* const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); */

//let n: string = "mario";

//n = "";

/* rl.question(`insert value?`, (a) => {
  const res = sum(Number(a), Number(a));
  console.log(`Il risultato della somma è: ${res}`);
  rl.close();
}); */

/* const a = 2;
const b = 2;
console.log(sum(a, b)); */

//==============================
// Tipizzare gli oggetti
//==============================

interface Persona {
  nome: string;
  cognome: string;
  eta: number;
  luogodinascita?: string;
  info?: Info;
}

interface Info {
  tel: string;
  address: string;
  data?: Persona[];
}

let lucaInfo: Info = {
  tel: "350-349494",

  address: "dkdkdkdk",
};

let persona: Persona;

// async //

persona = {
  nome: "Luca",
  cognome: "Ferrarsso",
  eta: 27,
  info: lucaInfo,
};

//==============================
// Tipizzare gli array
//==============================
// num : number[]
// num : Array<number>

const num: Array<number> = [0, 2, 4, 6];
