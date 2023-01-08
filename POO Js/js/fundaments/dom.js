/* let texto = "Hola, buenas noches!"
        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

        hablar(texto); */

//-------------------------------------------------------

/* console.log("Elementos del documento");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.styleSheets);
console.log(document.forms);
console.log(document.scripts);
document.write("<h2>Hola mundo desde el DOM!</h2>") */

//-------------------------------------------------------
//atrapar elementos en el dom antiguos

/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

//atrapar elementos en el dom actuales
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li")); */

//-------------------------------------------------------
//atrapar atributos del dom

/* 
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "en");
console.log(document.documentElement.lang);

//modificar y remover atributos en variables (agregar "$" a variables relacionadas con elementos del dom)
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.google.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel"));

//traer data-attributes
console.log($linkDOM.getAttribute("data-description")); */

//-------------------------------------------------------
//ATRAPAR ESTILOS Y VARIABLES

/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

//estableciendo valores
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.textLeft = "center";
$linkDOM.style.textRight = "center";
$linkDOM.style.padding = "1rem";
$linkDOM.style.textRight = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//variables CSS - Custom properties CSS
const $html = document.documentElement,
      $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
 
console.log(varDarkColor, varYellowColor);

//modificar elemento body
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
 
$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor); */

//-------------------------------------------------------
//ATRAPAR CLASES DEL DOM

/* const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
//agregar clase
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
//eliminar clase
$card.classList.remove("rotate-45");
console.log($card.className);
console.log($card.classList);
//toggle evalua si tiene o no tiene la clase, y la agrega o elimina dependiendo la verificacion
$card.classList.toggle("rotate-45");
console.log($card.className);
console.log($card.classList);
//replace reemplaza la clase por otra
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia")
console.log($card.className);
console.log($card.classList); */

//-------------------------------------------------------
//ATRAPAR TEXTOS Y HTML

/* const $whatsIsDOM = document.getElementById("que-es");

let text = `
    <p> 
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`;

//$whatsIsDOM.innerText = text;

//imprime solo texto
$whatsIsDOM.textContent = text;
//imprime texto html
$whatsIsDOM.innerHTML = text;
//reemplaza un elemento
$whatsIsDOM.outerHTML = text; */

//-------------------------------------------------------
//DOM traversing

/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body")); */

//-------------------------------------------------------
//Crear elementos y fragmentos dinamicamente

/* const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards"),
//agregar segundo elemento
$figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//agregar segundo elemento
$figure2.innerHTML = `<img src="https://placeimg.com/200/200/people" alt="People"><figcaption>People</figcaption>`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

//agregar muchos elementos
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) =>{
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["Asia", "América", "Europa", "Oceanía", "África"],
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//agregar fragmento

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.append($ul3); */

//-------------------------------------------------------
//Templates HTLM

/* const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
{
  title:"Tecnología",
  img:"https://placeimg.com/200/200/tech"
},
{
  title:"Animales",
  img:"https://placeimg.com/200/200/animals"
},
{
  title:"Gente",
  img:"https://placeimg.com/200/200/people"
},
{
  title:"Arquitectura",
  img:"https://placeimg.com/200/200/arch"
},
{
  title:"Naturaleza",
  img:"https://placeimg.com/200/200/nature"
}
];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

//-------------------------------------------------------
//Modificando elementos - old style

/* const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card"); */

//reemplazar
//$cards.replaceChild($newCard, $cards.children[2]);

//agregar en primer lugar
//$cards.insertBefore($newCard, $cards.firstElementChild);

//eliminar ultima card
//$cards.removeChild($cards.lastElementChild);

//clonar elemento
//document.body.appendChild($cloneCards);

//-------------------------------------------------------
//Modificando elementos - new style

/* insertAdjacent
.insertAdjacentElement(position, el)
.insertAdjacentHTML(position, html)
.insertAdjacentText(position, text)

posiciones
beforeBegin(hermano anterior)
AfterEnd(hermano siguiente)
afterBegin(primer hijo)
beforeEnd(ultimo hijo) */

/* const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$cards.insertAdjacentElement("afterBegin", $newCard);
//$cards.insertAdjacentElement("beforeBegin", $newCard);
//$cards.insertAdjacentElement("afterEnd", $newCard);
//$cards.insertAdjacentElement("beforeEnd", $newCard); */

//-------------------------------------------------------
//Manejadores de eventos

/* function holaMundo(){
  alert("hola mundo!");
  console.log(event);
}

//eventos semanticos manejan una sola funcion
const $eventoSemantico = document.getElementById("evento-semantico"),
$eventoSemanticoMultiple = document.getElementById("evento-semantico-multiple");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(){
  alert("Hola mundo con manejador de eventos semánticos");
};

//manejador de eventos multiple
$eventoSemanticoMultiple.addEventListener("click", holaMundo);
$eventoSemanticoMultiple.addEventListener("click", (e) =>{
    alert("Hola mundo con manejador de eventos semánticos múltiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
}); */

//-------------------------------------------------------
//Eventos con parametros y remover eventos

/* function saludar(nombre = "Desconocido/a"){
  alert(`Hola ${nombre}`);
  console.log(event);
};

const $eventoSemanticoMultiple = document.getElementById("evento-semantico-multiple"),
$eventoRemover = document.getElementById("evento-remover");

$eventoSemanticoMultiple.addEventListener("click", () => {
saludar();
saludar("Facu");
});

//remover eventos
const removerDobleCick = (e) =>{
alert(`Removiendo el evento de tipo ${e.type}`);
console.log(e);
$eventoRemover.removeEventListener("dblclick", removerDobleCick);
$eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleCick); */

//-------------------------------------------------------
//Flujo de Eventos (burbuja y captura) 
//stopPropagation & preventDefault


/* const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  //eliminar propagacion de burbuja
  e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //fase de burbuja - del elemento mas interno al mas externo
  div.addEventListener("click", flujoEventos, false);
  
  //fase de captura - del elemento mas externo al mas interno
  //div.addEventListener("click", flujoEventos, true);
});

$linkEventos.addEventListener("click", (e) =>{
alert("Hola, probando stopPropagation");
//cancela la accion que genera el elemento
e.preventDefault();
}); */

//-------------------------------------------------------
//Delegacion de eventos

/* function flujoEventos(e){
  console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
}

document.addEventListener("click", (e) =>{
  console.log("Click en ", e.target);

  if(e.target.matches(".eventos-flujo div")){
    flujoEventos(e);
  };

  if(e.target.matches(".eventos-flujo a")){
    alert("Hola, probando stopPropagation");
    //cancela la accion que genera el elemento
    e.preventDefault();
  };
}); */

//-------------------------------------------------------
//Manejo del BOM

/* window.addEventListener("resize", (e) => {
console.clear();
console.log("Evento Resize");
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(window.screenX);
console.log(window.screenY);
console.log(e);
});

window.addEventListener("scroll", (e) =>{
console.clear();
console.log("Evento Scroll");
console.log(window.scrollX);
console.log(window.scrollY);
console.log(e);
});

window.addEventListener("load", (e) =>{
console.log("Evento Load");
console.log(window.screenX);
console.log(window.screenY);
console.log(e);
});

//mejor practica usar DOMContentLoaded
document.addEventListener("DOMContentLoaded", (e) =>{
console.log("Evento DOMContentLoaded");
console.log(window.screenX);
console.log(window.screenY);
console.log(e);
}) */

//-------------------------------------------------------
//Metodos en BOM

//metodos basicos
/* 
window.alert("Alert");
window.confirm("Acept or cancel");
window.prompt("Advice"); */

/* const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
ventana = window.open("https://www.google.com");
});

$btnCerrar.addEventListener("click", (e) =>{
ventana.close();
});

$btnImprimir.addEventListener("click", (e) =>{
window.print();
}); */

//-------------------------------------------------------
//Objetos:URL, Historial, Navegador en BOM

//URL

/* console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);// pasa lo que sigue de un #
console.log(location.pathname);
console.log(location.search);//pasa parametros */

//HISTORY

/* console.log(history);
console.log(history.length); */
/*history.back();//vuelve "x" cantidad de paginas
history.forward();//avanza "x" cantidad de paginas
history.go();//avanza "x" cantidad de paginas desde la posicion 0 */

//NAVIGATOR

/* console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */
