const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let time = 0;
let animationFrameId;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawFluid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);
    const colors = [
        [0xf3, 0x92, 0x00, 0xff],  // f39200ff
        [0xe0, 0xd5, 0x43, 0xe6],  // e0d543e6
        [0x46, 0xb1, 0xe1, 0xff],  // 46b1e1ff
        [0xff, 0xff, 0xff, 0xff]   // 1f4d6bff
    ];

    for (let i = 0; i < 4; i++) {
        const angle = (Math.PI / 2) * i;
        const startX = centerX + Math.cos(angle) * maxRadius;
        const startY = centerY + Math.sin(angle) * maxRadius;

        ctx.beginPath();
        ctx.moveTo(startX, startY);

        for (let r = maxRadius; r > 0; r -= 5) {
            const x = centerX + Math.cos(angle + time * 0.04 + r * 0.01) * r;
            const y = centerY + Math.sin(angle + time * 0.04 + r * 0.01) * r;
            ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(startX, startY, centerX, centerY);
        const [r, g, b, a] = colors[i];
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a / 255})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    time += 0.07; // Increased speed
    animationFrameId = requestAnimationFrame(drawFluid);
}

function startAnimation() {
    resizeCanvas();
    drawFluid();
}

window.addEventListener('resize', () => {
    cancelAnimationFrame(animationFrameId);
    startAnimation();
});

startAnimation();

const dialog = document.querySelector('#d1');
const show = document.querySelector('#show1');
const cancel = document.querySelector('#cancel1');

show.addEventListener('click', () => {
    dialog.showModal();
});
cancel.addEventListener('click', () => {
    dialog.close();
});