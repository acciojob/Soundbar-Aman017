//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'stop'];
const buttons = document.getElementById('buttons');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  if (sound === 'stop') btn.classList.add('stop');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    if (sound !== 'stop') {
      const audio = document.getElementById(sound);
      audio.play();
    }
  });

  buttons.appendChild(btn);

  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
