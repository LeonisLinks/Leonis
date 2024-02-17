const music: HTMLAudioElement = document.querySelector('#music-play');
const musicContainer: HTMLDivElement = document.querySelector('#music');
const container: HTMLDivElement = document.querySelector('#container');

musicContainer.onclick = () => {
  music.play();
  music.loop = true;
  music.volume = 0.5;
  musicContainer.style.display = 'none';
  container.style.opacity = '1';
}