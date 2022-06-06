const logo = document.getElementById('logo');
const audio = document.getElementById('audioEl');
audio.loop = true;

logo.addEventListener('click', () => {
  audio.play();
});
