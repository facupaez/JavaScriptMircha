import saludar,{Saludar, PI, usuario}from "./constantes.js";
//crear alias de aritmetica
import{aritmetica as arit}from "./aritmetica.js";

console.log("Archivo module.js");

console.log(PI, usuario);
console.log(arit.sumar(3,4));
console.log(arit.restar(3,4));
saludar();
const saludo = new Saludar();
saludo;