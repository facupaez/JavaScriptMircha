const d = document,
  w = window;

export default function smartVideo() {
  const $video = d.querySelectorAll("video[data-smart-video-messi]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilitychange", (e) =>
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  $video.forEach((el) => observer.observe(el));

  const $video2 = d.querySelectorAll("video[data-smart-video-messi2]");

  const cb2 = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilitychange", (e) =>
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };
  const observer2 = new IntersectionObserver(cb2, { threshold: 0.5 });

  $video2.forEach((el) => observer2.observe(el));
}
