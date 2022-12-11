const d = document;

export default function digitalDraw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    console.log($players, random, winner);

    return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}

/* Para web inspeccionadas */

/* const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];

  console.log($players, random, winner);

  return `El ganador es: ${winner.textContent}`;
};
 */

//Ejemplo!
//getWinnerComment("ytd-comment-thread-renderer #author-text span");
