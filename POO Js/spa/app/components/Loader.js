export function Loader() {
  const $loader = document.createElement("img");

  $loader.src = "../assets/oval.svg";
  $loader.alt = "Cargando...";
  $loader.classList.add("loader");

  return $loader;
}
