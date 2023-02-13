export function Menu() {
  const $menu = document.createElement("nav");

  $menu.classList.add("menu");
  $menu.innerHTML = `
  <a href="#/home">Home</a>
  <span>-</span>
  <a href="#/search">Buscar</a>
  <span>-</span>
  <a href="https://aprendejavascript.org" target="_blank" rel="noopener">Aprende JS</a>
  <span>-</span>
  <a href="#/contacto">Contacto</a>
  `;

  return $menu;
}
