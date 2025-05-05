console.log('hi script.js')

const video = document.querySelector('video');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const muteButton = document.querySelector('#mute')
const unmuteButton = document.querySelector('#unmute')

pauseButton.classList.add("hidden");
unmuteButton.classList.add("hidden");

playButton.addEventListener("click", function(e){
    video.play();
    pauseButton.classList.remove("hidden");
    playButton.classList.add("hidden");
}
);
pauseButton.addEventListener("click", function(e) {
    video.pause();
    pauseButton.classList.add("hidden");
    playButton.classList.remove("hidden");
}
);

muteButton.addEventListener("click", function(e) {
    video.muted = true;
    muteButton.classList.add("hidden");
    unmuteButton.classList.remove("hidden");
}
);

unmuteButton.addEventListener("click", function(e){
    video.muted = false;
    unmuteButton.classList.add("hidden");
    muteButton.classList.remove("hidden");
}
)