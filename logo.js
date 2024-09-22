// script.js

// Rotating circle interactivity
document.querySelector('.background-shapes').addEventListener('mouseenter', function() {
    this.style.animationDuration = '5s';  // Speed up the rotation
});

document.querySelector('.background-shapes').addEventListener('mouseleave', function() {
    this.style.animationDuration = '10s';  // Reset to normal speed
});

// Wave animation (Canvas)
const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 150;

let wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 20,
    frequency: 0.02
};

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    ctx.moveTo(0, wave.y);

    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, wave.y + Math.sin(i * wave.length + wave.frequency) * wave.amplitude);
    }

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();

    wave.frequency += 0.02; // Animate the wave
    requestAnimationFrame(drawWave);
}

drawWave();
 