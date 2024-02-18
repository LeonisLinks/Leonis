var music = document.querySelector('#music-play');
var musicContainer = document.querySelector('#music');
var container = document.querySelector('#container');
var musicControl = document.querySelector('#music-control');
musicContainer.onclick = function () {
    music.play();
    music.loop = true;
    music.volume = 0.5;
    musicContainer.style.display = 'none';
    container.style.opacity = '1';
    musicControl.style.opacity = '1';
    musicControl.onclick = function () {
        if (music.paused) {
            music.play();
            musicControl.innerHTML = '<i data-feather="volume-2"></i>';
        }
        else {
            music.pause();
            musicControl.innerHTML = '<i data-feather="volume-x"></i>';
        }
        // @ts-ignore
        feather.replace();
    };
};
// @ts-ignore
feather.replace();
