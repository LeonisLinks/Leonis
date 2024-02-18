const music: HTMLAudioElement = document.querySelector('#music-play');
const musicContainer: HTMLDivElement = document.querySelector('#music');
const container: HTMLDivElement = document.querySelector('#container');
const musicControl: HTMLDivElement = document.querySelector('#music-control');

musicContainer.onclick = () => {
  music.play();
  music.loop = true;
  music.volume = 0.5;
  musicContainer.style.display = 'none';
  container.style.opacity = '1';
  musicControl.style.opacity = '1';

  musicControl.onclick = () => {
    if (music.paused) {
      music.play();
      musicControl.innerHTML = '<i data-feather="volume-2"></i>';
    } else {
      music.pause();
      musicControl.innerHTML = '<i data-feather="volume-x"></i>';
    }
    // @ts-ignore
    feather.replace();
  }
}

// @ts-ignore
feather.replace();