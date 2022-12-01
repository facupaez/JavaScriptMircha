const d = document,
  w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = document.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = d.documentElement.scrollTop || w.pageYOffset;

    if (scrollTop > 900) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
    //console.log(w.pageYOffset, d.documentElement.scrollTop);
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      d.documentElement.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
