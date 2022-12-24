const d = document;

export default function slider() {
  const $slides = d.querySelectorAll(".slider-slide"),
    $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev");

  let contador = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $slides[contador].classList.remove("active");
      contador--;

      if (contador < 0) {
        contador = $slides.length - 1;
      }

      $slides[contador].classList.add("active");
    }

    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[contador].classList.remove("active");
      contador++;

      if (contador >= $slides.length) {
        contador = 0;
      }

      $slides[contador].classList.add("active");
    }
  });
}
