import countdown from "./domExercises/cuenta_regresiva.js";
import hamburgerMenu from "./domExercises/menu_hamburguesa.js";
import { digitalClock, alarm } from "./domExercises/reloj.js";
import { moveBall, shorcuts } from "./domExercises/teclado.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "February 15, 2023", "Feliz Cumpleaños!");
});

/* teclado 3 posiciones: 
keyup cuando soltamos la tecla,
keydown cuando presionamos la tecla,
keypress mientras presionamos la tecla */
d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});
