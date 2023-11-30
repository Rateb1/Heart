const music = document.querySelector("audio");
const heart = document.getElementById("heart");

heart.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    heart.classList.add("animation");
  } else {
    music.pause();
    heart.classList.remove("animation");
  }
});
