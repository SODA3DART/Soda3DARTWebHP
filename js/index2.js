// Index2 Museum Logic - The White Cube (Upgraded)

// No imports - assumes THREE is loaded globally via script tag
height = window.innerHeight;
canvas.width = width;
canvas.height = height;


class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.life = 1;
        this.decay = 0.02;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.size -= 0.1;
    }

    draw(ctx) {
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animateCursor() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);

        if (particles[i].life <= 0 || particles[i].size <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();
}
