let audio=new Audio('sound.mp3');

function playaudio(){
    audio.play();
}
document.querySelector('.track').addEventListener('click', playaudio)