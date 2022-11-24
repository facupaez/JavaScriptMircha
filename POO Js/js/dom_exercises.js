import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shorcuts } from "./dom/teclado.js";
const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("../assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
});

/* teclado 3 posiciones: 
keyup cuando soltamos la tecla,
keydown cuando presionamos la tecla,
keypress mientras presionamos la tecla */

d.addEventListener("keyup", (e)=>{
    shorcuts(e);
})