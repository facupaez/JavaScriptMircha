import scrollTopButton from "./domExercises/boton_scroll.js";
import countdown from "./domExercises/cuenta_regresiva.js";
import hamburgerMenu from "./domExercises/menu_hamburguesa.js";
import { digitalClock, alarm } from "./domExercises/reloj.js";
import { moveBall, shorcuts } from "./domExercises/teclado.js";
import darkTheme from "./domExercises/tema_oscuro.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "February 15, 2023", "Feliz Cumpleaños!");
  scrollTopButton(".scroll-top-btn");
  darkTheme(".dark-theme-btn", "dark-mode");
});

/* teclado 3 posiciones: 
keyup cuando soltamos la tecla,
keydown cuando presionamos la tecla,
keypress mientras presionamos la tecla */
d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});
