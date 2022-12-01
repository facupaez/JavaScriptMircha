export const PI = Math.PI;
export let usuario = "Js";
let password = "qwerty";

//solo permite 1 export default
//solo permite export default al declarar funcion o clase no asi al declarar variables
export default function saludar(){
    console.log("Hola modulos +es6 con funcion");
}

export class Saludar{
    constructor(){
         console.log("Hola modulos +es6 con clase");
    }
}