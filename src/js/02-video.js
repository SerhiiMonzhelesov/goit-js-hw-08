import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});
