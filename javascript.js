
let entryMusic;
let currentAudio;
// Play looped background entry music
function playEntryMusic() {
    if (!entryMusic) {
        entryMusic = new Audio('./341807__drfx__some-background-i-made-for-my-game-ambient-music.mp3');
        entryMusic.loop = true;
        entryMusic.play();
    }
}

// Stop entry music if needed
function stopEntryMusic() {
    if (entryMusic) {
        entryMusic.pause();
        entryMusic.currentTime = 0;
        entryMusic = null;
    }
}

// Play a one-time sound effect or music track
function playAudio(audioSrc) {
    // Stop any current non-entry audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(audioSrc);
    currentAudio.play();
}

// Example usage: Play entry music on page load
window.addEventListener('DOMContentLoaded', () => {
    playEntryMusic();
});
