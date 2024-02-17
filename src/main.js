var music = document.querySelector('#music-play');
var musicContainer = document.querySelector('#music');
var container = document.querySelector('#container');
musicContainer.onclick = function () {
    music.play();
    music.loop = true;
    music.volume = 0.5;
    musicContainer.style.display = 'none';
    container.style.opacity = '1';
};
