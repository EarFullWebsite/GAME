var audio = new Audio();
audio.preload = 'auto';
audio.src = 'music.mp3'
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
video.pause()
function myFunction() {
    if (video.paused) {
        video.play();
        audio.play()
        video.style.opacity = "1"
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        audio.pause()
        btn.innerHTML = "Play";
    }
}