import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_VIDEO = "videoplayer-current-time";


player.on('timeupdate', throttle(onPlay, 1000));


 function onPlay(evt) {
    localStorage.setItem(CURRENT_TIME_VIDEO, evt.seconds);
};

const currentTime = localStorage.getItem(CURRENT_TIME_VIDEO);

player.setCurrentTime(currentTime);
