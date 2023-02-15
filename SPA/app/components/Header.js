import { Menu } from "./Menu.js";
import { SearchForm } from "./SearchForm.js";
import { Title } from "./title.js";

export function Header() {
  const $header = document.createElement("header");

  $header.classList.add("header");
  $header.appendChild(Title());
  $header.appendChild(Menu());
  if (location.hash.includes("#/search")) $header.appendChild(SearchForm());

  return $header;
}
