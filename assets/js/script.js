// Видео
document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("play-button");
  const video = document.querySelector(".fullscreen-video");

  playButton.addEventListener("click", function () {
    playButton.style.display = "none";
    video.play();
    videoText.style.display = "none"; // Скрыть текст при клике на кнопку воспроизведения
  });

  video.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      playButton.style.display = "none"; // Скрыть кнопку при клике на видео
    } else {
      video.pause();
    }
  });
});
// Бугер Меню
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".burger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".menu").classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });
});
