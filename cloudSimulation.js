// cloudSimulation.js

class Particle {
    constructor(x, y, size, opacity, context) {
        this.ctx = context;
        this.originalX = x;
        this.originalY = y;
        this.x = x;
        this.y = y;
        this.size = size;
        this.opacity = opacity;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }

    update() {
        const newX = this.x + this.speedX;
        const newY = this.y + this.speedY;

        // check if new position is within constraints
        if (
            newX <= this.originalX + 10 &&
            newX >= this.originalX - 10 &&
            newY <= this.originalY + 10 &&
            newY >= this.originalY - 10
        ) {
            this.x = newX;
            this.y = newY;
        } else {
            if (newX < this.originalX - 10 || newX > this.originalX + 10) {
                this.speedX = -this.speedX;
            }

            if (newY < this.originalY - 10 || newY > this.originalY + 10) {
                this.speedY = -this.speedY;
            }
        }
    }

    draw(ctx) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        this.ctx.fill();
    }
}

class ParticleSystem {
    constructor(numParticles, minSize, maxSize, path, initialPos, context, canvas) {
        this.particles = [];

        this.particleBounds = path;
        this.ctx = context;
        this.canvas = canvas;

        let offscreenOffset = 500;


        for (let i = 0; i < numParticles; i++) {
            const generatedPoint = this.generatePointWithinBounds();
            // TODO: adjust start point here 
            const x = generatedPoint.x + initialPos.x;
            const y = generatedPoint.y + initialPos.y;
            const size = Math.floor(Math.random() * (maxSize - minSize) + minSize);
            const opacity = Math.random() * 0.25 + 0.1;
            this.particles.push(new Particle(x, y, size, opacity, context));
        }

    }

    vw() {
        return window.innerWidth / 100;
      }
      
    vh() {
        return window.innerHeight / 100;
    }

    update() {
        this.particles.forEach(particle => particle.update());
    }

    // implement a function to move the entire system across the canvas

    draw() {
        this.particles.forEach(particle => particle.draw(this.ctx));
    }

    generatePointWithinBounds() {
        let pointWithinBounds = false;
        let point = { x: null, y: null };
        while (!pointWithinBounds) {
            point.x = Math.floor(Math.random() * this.canvas.width);
            point.y = Math.floor(Math.random() * this.canvas.height);
            pointWithinBounds = this.ctx.isPointInPath(this.particleBounds, point.x, point.y);
        }

        return point;
    }
}

class Cloud {
    constructor(canvas, context, cloudPath, horizontalSpeed, initialPos, direction) {
        this.canvas = canvas;
        this.ctx = context;

        this.cloudOutline = new Path2D(cloudPath);

        this.cloud = new ParticleSystem(600, 50, 20, this.cloudOutline, initialPos, this.ctx, this.canvas);

        this.animate = this.animate.bind(this);
        this.isMoving = false;

        this.initialPos = initialPos;

        this.cloudX = 0;
        this.cloudY = 0;
        this.speedY = 0;
        this.speedX = horizontalSpeed;

        this.direction = direction;

        if (direction === "forward") {
            this.speedX = horizontalSpeed;
        } else {
            this.speedX = -horizontalSpeed;
        }
        
    }

    animate() {
        if (!this.isMoving) {
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save();
        this.ctx.translate(this.cloudX, this.cloudY);

        this.cloud.update();
        this.cloud.draw();

        this.ctx.restore();

        this.cloudX += this.speedX;
        this.cloudY += this.speedY;

        // TODO: adjust restart position here
        // if (this.cloudX > this.canvas.width) this.cloudX = 0;
        //     if (this.cloudY > this.canvas.height) this.cloudY = 0;
        if (this.direction === "forward") {
            if (this.cloudX + this.initialPos.x > this.canvas.width) this.cloudX = 0;
        } else {
            console.log("backward direction");
            if (this.cloudX < -this.canvas.width) {
                this.cloudX = this.initialPos.x;
            }
        }
        



        // TODO: add operations here if removing clouds

        requestAnimationFrame(this.animate);
    }

    startAnimation() {
        console.log("animation started");
        this.isMoving = true;
        this.animate();
    }

    pauseAnimation() {
        this.isMoving = false;
    }
}


class ResponsiveCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');

        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCtx = this.offscreenCanvas.getContext('2d');

        this.initializeCanvas();
        this.offscreenCanvas.width = this.canvas.width;
        this.offscreenCanvas.height = this.canvas.height;

        const sampleCloudPath = "m134.52,149.82s2.05-103.64,80.04-103.64,90.52,35.92,91.44,82.09c0,0,148.9-63.44,169.42,50.46,0,0,64.43-5.31,65.46,38.81s-77.99,53.36-77.99,53.36c0,0-54.39,72.86-151.87,33.86,0,0-75.93,102.61-137.5-16.42,0,0-139.56,18.47-147.77-44.12s32.84-87.22,108.77-94.41Z"
        this.newCloud = new Cloud(this.canvas, this.ctx, sampleCloudPath, 2, {x: 600, y: 100}, "backward");

        window.addEventListener('resize', () => this.resizeCanvas());
    }

    initializeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    resizeCanvas() {
        // save current canvas content to offscreen context
        this.offscreenCanvas.width = this.canvas.width;
        this.offscreenCanvas.height = this.canvas.height;
        this.offscreenCtx.drawImage(this.canvas, 0, 0);

        this.initializeCanvas();

        this.ctx.drawImage(this.offscreenCanvas, 0, 0);
    }
}


const responsiveCanvas = new ResponsiveCanvas('cloudCanvas');
responsiveCanvas.newCloud.startAnimation();


// refactor to make customize points customizable
// todo: add other types of clouds

// todo: make clouds come from other side

// create a way to swap clouds based on certain conditions