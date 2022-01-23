// Cache DOM Elements
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Constants
let currentSongIndex = 0;
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  },
];

const DIRECTION = {
  FORWARD: 'FORWARD',
  BACKWARD: 'BACKWARD',
};

const getNewSongIndex = (direction) => {
  const lastArrayItemIndex = songs.length - 1;

  switch (direction) {
    case DIRECTION.FORWARD:
      if (currentSongIndex === lastArrayItemIndex) {
        return 0;
      }
      return currentSongIndex + 1;
    case DIRECTION.BACKWARD:
      if (currentSongIndex === 0) {
        return lastArrayItemIndex;
      }
      return currentSongIndex - 1;
  }
};

const togglePlayMusic = () => {
  if (music.paused) {
    music.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
  } else {
    music.pause();
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
  }
};

const loadSong = ({ displayName, artist, name }) => {
  title.textContent = displayName;
  artist.textContent = artist;
  music.src = `music/${name}.mp3`;
  image.src = `img/${name}.jpg`;
};

const goToPrevSong = () => {
  const newSongIndex = getNewSongIndex(DIRECTION.BACKWARD);
  loadSong(songs[newSongIndex]);
  currentSongIndex = newSongIndex;
  music.play();
};

const goToNextSong = () => {
  const newSongIndex = getNewSongIndex(DIRECTION.FORWARD);
  loadSong(songs[newSongIndex]);
  currentSongIndex = newSongIndex;
  music.play();
};

// Event Listeners
window.addEventListener('load', () => {
  loadSong(songs[currentSongIndex]);
});

playBtn.addEventListener('click', togglePlayMusic);
prevBtn.addEventListener('click', goToPrevSong);
nextBtn.addEventListener('click', goToNextSong);
