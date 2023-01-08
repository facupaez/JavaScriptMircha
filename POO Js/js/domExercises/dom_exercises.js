import scrollTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import getGeolocation from "./deteccion_geolocalizacion.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilter from "./filtro_busquedas.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import responsiveTester from "./responsive.js";
import scrollSpy from "./scroll_spy.js";
import digitalDraw from "./sorteo_digital.js";
import { moveBall, shorcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import contactFormValidations from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "February 15, 2023", "Feliz Cumpleaños!");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/q7WA7y-9Fjg" target="_blank" rel="noonper">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/q7WA7y-9Fjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/xW51VVwbNMdXBXJg8" target="_blank" rel="noonper">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1699.9456414649833!2d-63.53599680480868!3d-31.55459811156551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94332a4d9f0068cf%3A0x1cc7a9123d1d94ad!2sPlaza%20General%20Paz.!5e0!3m2!1ses!2sar!4v1669953892824!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  digitalDraw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

/* teclado 3 posiciones: 
keyup cuando soltamos la tecla,
keydown cuando presionamos la tecla,
keypress mientras presionamos la tecla */
d.addEventListener("keydown", (e) => {
  shorcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
