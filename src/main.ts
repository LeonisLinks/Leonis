const music: HTMLAudioElement = document.querySelector('#music-play');
const musicContainer: HTMLDivElement = document.querySelector('#music');
const container: HTMLDivElement = document.querySelector('#container');
const musicControl: HTMLDivElement = document.querySelector('#music-control');
const information: HTMLDivElement = document.querySelector('#information');

let n: string = "Leonis";
let d: string = "A simple and fast bio link"

/* let leftAndRightTemplate: string = ``;
let centerTemplate: string = ``; */

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

let classList: DOMTokenList = document.body.classList;
const description: HTMLSpanElement = document.querySelector('#description');

if (classList.contains("description-typewrite")) {
  // @ts-ignore
  const typewriter = new Typewriter('#description', {
    strings: [description.innerHTML],
    autoStart: true,
    loop: true
  });
}

// @ts-ignore
feather.replace();