const logo = document.getElementById('logo'),
  audio = document.getElementById('audioEl'),
  sayInput = document.getElementById('saymyname');
(sayBtn = document.getElementById('goddamn')),
  (sayVoice = document.getElementById('godDamnVoice')),
  (youKnowVoice = document.getElementById('youKnowVoice')),
  (whatVoice = document.getElementById('whatVoice')),
  (grid = document.getElementById('grid')),
  (char = document.getElementById('char'));

audio.loop = true;

checkFirstAudio = true;

const checkWalterOne = 'Heisenberg';
const checkWalterTwo = 'heisenberg';

logo.addEventListener('click', () => {
  audio.play();
});

sayBtn.addEventListener('click', () => {
  if (!sayInput.value) return;
  if (sayInput.value === checkWalterOne || sayInput.value === checkWalterTwo) {
    sayVoice.play();
  } else if (
    checkFirstAudio &&
    (sayInput.value !== checkWalterOne || sayInput.value !== checkWalterTwo)
  ) {
    youKnowVoice.play();
    checkFirstAudio = false;
  } else {
    whatVoice.play();
  }
});

char.addEventListener('click', () => {
  grid.scrollIntoView({ behavior: 'smooth' });
});
