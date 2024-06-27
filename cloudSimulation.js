// cloudSimulation.js

const cloudPaths = [
    {
        id: 0, // 0
        size: 50,
        speed: 0.3,
        numParticles: 250,
        screen: "xs",
        initialPos: {
            x: 500,
            y: 50
        },
        direction: "backward",
        path: "m174.25,76.86s-47.2-1.45-46.48,23.24c0,0-41.39-11.29-43.57,25.95s45.03,32.15,45.03,32.15c0,0-125.64-22.51-127.81,38.49s-18.88,99.49,155.41,96.59c174.29-2.9,215.69.15,215.69.15,0,0,108.93,20.91,107.48-68.42s-97.31-93.68-140.16-92.23c0,0,22.51-130.72-58.1-130.72s-106.03,2.18-107.48,74.8Z"
    },
    {
        id: 1, // 1
        size: 50,
        speed: 0.1,
        numParticles: 100,
        screen: "xs",
        initialPos: {
            x: 620,
            y: 50,
        },
        direction: "backward",
        path: "m464.31,72.33c-42.94-17.54-78.37-82.14-172.84-56.3S10.19,20.64,8.05,49.25c-2.15,28.61,135.27,24.92,223.3,35.99,88.03,11.08,211.49,47.99,299.52,47.99s94.47-23.07,94.47-35.99-118.09-7.38-161.03-24.92Z"
    }, 
    {
        id: 2, // 3
        size: 50,
        speed: 0.2,
        numParticles: 250,
        screen: "xs",
        initialPos: {
            x: 700, // 500 
            y: 5
        },
        direction: "forward",
        path: "m106.06,103.31s1.85-93.62,72.3-93.62,81.77,32.45,82.6,74.15c0,0,134.5-57.31,153.04,45.58,0,0,58.2-4.8,59.13,35.06s-70.45,48.2-70.45,48.2c0,0-49.13,65.81-137.18,30.59,0,0-68.59,92.69-124.2-14.83,0,0-126.06,16.68-133.48-39.85C.39,132.04,37.47,109.8,106.06,103.3h0Z"
    },
    {
        id: 3, // 4
        size: 45,
        speed: 0.4,
        numParticles: 80,
        screen: "xs",
        initialPos: {
            x: 400,
            y: 10
        },
        direction: "forward",
        path: "m169.3,86.6c42.94,17.54,78.37,82.14,172.84,56.3,94.47-25.84,281.27-4.61,283.42-33.23s-135.27-24.92-223.3-35.99c-88.03-11.08-211.49-47.99-299.52-47.99S8.26,48.76,8.26,61.69s118.09,7.38,161.03,24.92Z"
    },
    {
        id: 4, // 1
        size: 50,
        speed: 0.5,
        numParticles: 150,
        screen: "s",
        initialPos: {
            x: 930,
            y: 60,
        },
        direction: "backward",
        path: "m569.97,114.94c-51.62-21.08-94.21-98.74-207.77-67.68C248.63,78.33,24.07,52.81,21.49,87.21c-2.58,34.39,162.61,29.96,268.43,43.27,105.82,13.31,254.23,57.69,360.06,57.69s113.57-27.74,113.57-43.27-141.96-8.88-193.58-29.96Z"
    }, 
    {
        id: 5, // 2
        size: 40,
        speed: 0.2,
        numParticles: 600,
        screen: "s",
        initialPos: {
            x: 860,
            y: 30
        },
        direction: "backward",
        path: "m430.99,85s-44.05-11.39-47.64,32.53c-3.59,43.92,98.44,46.19,97.62,45.38s-125.61-3.09-123.17,18.87c2.44,21.96,8.13,63.43,43.92,41.48,0,0-17.51,48.2,51.62,33.56,69.13-14.64,41.91-76.67,41.91-76.67,0,0,78.44,27.49,96.34,27.49s33.34-17.89,35.78-15.45c2.44,2.44-.81,30.09,16.27,28.46,17.08-1.63,20.32,27.51,35.78,28.33,15.45.81-100.35,67.92-100.35,67.92,0,0-45.54-15.71-53.68-13.27-8.13,2.44-45.85,27.24-70.24,17.49-24.4-9.76-86.21-26.82-103.28.82-17.08,27.64-67.5-69.93-127.68,0,0,0-72.38-59.37-104.91-4.89-32.53,54.49,0,78.89,0,78.89,0,0-95.15-13.01-99.22,45.54-4.07,58.55,67.5,57.74,83.77,54.49,0,0-59.37,10.57-21.96,30.9,37.41,20.33,88.65-23.58,88.65-23.58,0,0-10.57,87.83,78.89,73.19,89.46-14.64,79.7-83.77,79.7-83.77,0,0,17.89,69.94,74.82,61.81,56.93-8.13,62.62-56.93,62.62-94.34,0,0,26.02,98.4,78.07,65.87,52.05-32.53,30.09-92.71,33.34-108.16,0,0,56.93,43.92,69.13,4.88,12.2-39.04-39.04-78.89-39.04-78.89,0,0,268.19-10.19,266.57-89.08-1.63-78.89-87.83-86.21-87.83-86.21,0,0,39.04-79.7-33.34-78.89,0,0-52.48-55.49-114.29-8.32,0,0-168.29-85.04-208.14,3.6Z"
    }, 
    {
        id: 6, // 3
        size: 70,
        speed: 0.5,
        numParticles: 300,
        screen: "s",
        initialPos: {
            x: 750, // 500 
            y: 5
        },
        direction: "forward",
        path: "m172.95,170.56s2.92-147.51,113.92-147.51,128.84,51.12,130.15,116.84c0,0,211.93-90.29,241.13,71.82,0,0,91.7-7.56,93.17,55.24s-111,75.95-111,75.95c0,0-77.41,103.7-216.16,48.19,0,0-108.07,146.04-195.7-23.37,0,0-198.63,26.29-210.32-62.8-11.69-89.08,46.74-124.14,154.81-134.37h0Z"
    },
    {
        id: 7, // 1
        size: 50,
        speed: 0.5,
        numParticles: 150,
        screen: "m & l",
        initialPos: {
            x: 930,
            y: 60,
        },
        direction: "backward",
        path: "m569.97,114.94c-51.62-21.08-94.21-98.74-207.77-67.68C248.63,78.33,24.07,52.81,21.49,87.21c-2.58,34.39,162.61,29.96,268.43,43.27,105.82,13.31,254.23,57.69,360.06,57.69s113.57-27.74,113.57-43.27-141.96-8.88-193.58-29.96Z"
    }, 
    {
        id: 8, // 2
        size: 40,
        speed: 0.2,
        numParticles: 600,
        screen: "m & l",
        initialPos: {
            x: 860,
            y: 30
        },
        direction: "backward",
        path: "m430.99,85s-44.05-11.39-47.64,32.53c-3.59,43.92,98.44,46.19,97.62,45.38s-125.61-3.09-123.17,18.87c2.44,21.96,8.13,63.43,43.92,41.48,0,0-17.51,48.2,51.62,33.56,69.13-14.64,41.91-76.67,41.91-76.67,0,0,78.44,27.49,96.34,27.49s33.34-17.89,35.78-15.45c2.44,2.44-.81,30.09,16.27,28.46,17.08-1.63,20.32,27.51,35.78,28.33,15.45.81-100.35,67.92-100.35,67.92,0,0-45.54-15.71-53.68-13.27-8.13,2.44-45.85,27.24-70.24,17.49-24.4-9.76-86.21-26.82-103.28.82-17.08,27.64-67.5-69.93-127.68,0,0,0-72.38-59.37-104.91-4.89-32.53,54.49,0,78.89,0,78.89,0,0-95.15-13.01-99.22,45.54-4.07,58.55,67.5,57.74,83.77,54.49,0,0-59.37,10.57-21.96,30.9,37.41,20.33,88.65-23.58,88.65-23.58,0,0-10.57,87.83,78.89,73.19,89.46-14.64,79.7-83.77,79.7-83.77,0,0,17.89,69.94,74.82,61.81,56.93-8.13,62.62-56.93,62.62-94.34,0,0,26.02,98.4,78.07,65.87,52.05-32.53,30.09-92.71,33.34-108.16,0,0,56.93,43.92,69.13,4.88,12.2-39.04-39.04-78.89-39.04-78.89,0,0,268.19-10.19,266.57-89.08-1.63-78.89-87.83-86.21-87.83-86.21,0,0,39.04-79.7-33.34-78.89,0,0-52.48-55.49-114.29-8.32,0,0-168.29-85.04-208.14,3.6Z"
    }, 
    {
        id: 9, // 3
        size: 70,
        speed: 0.5,
        numParticles: 300,
        screen: "m & l",
        initialPos: {
            x: 750, // 500 
            y: 5
        },
        direction: "forward",
        path: "m172.95,170.56s2.92-147.51,113.92-147.51,128.84,51.12,130.15,116.84c0,0,211.93-90.29,241.13,71.82,0,0,91.7-7.56,93.17,55.24s-111,75.95-111,75.95c0,0-77.41,103.7-216.16,48.19,0,0-108.07,146.04-195.7-23.37,0,0-198.63,26.29-210.32-62.8-11.69-89.08,46.74-124.14,154.81-134.37h0Z"
    },
    {
        id: 10, // 5
        size: 30,
        speed: 0.2,
        numParticles: 600,
        screen: "m & l",
        initialPos: {
            x: 800,
            y: 15
        },
        direction: "forward",
        path: "m569.02,55.6c-52.44-27.87-106.31,0-107.97,31.56s-83.05-51.49-118.77-36.54c-35.71,14.95-69.76,78.9-125.41,63.12-55.65-15.78-70.6-73.92-100.49-56.48-29.9,17.44-91.36,34.05-88.87,63.95,2.49,29.9,57.31-2.49,125.41,18.27,68.1,20.76,129.46-15.78,198.03-4.98,68.57,10.8,234.68,117.11,229.69,39.04-4.98-78.07,151.36-78.07,152.92-107.97,1.56-29.9-112.11,17.9-164.55-9.97Z"
    },
    {
        id: 11, // 0
        size: 50,
        speed: 0.4,
        numParticles: 250,
        screen: "xl",
        initialPos: {
            x: 500,
            y: 40
        },
        direction: "backward",
        path: "m174.25,76.86s-47.2-1.45-46.48,23.24c0,0-41.39-11.29-43.57,25.95s45.03,32.15,45.03,32.15c0,0-125.64-22.51-127.81,38.49s-18.88,99.49,155.41,96.59c174.29-2.9,215.69.15,215.69.15,0,0,108.93,20.91,107.48-68.42s-97.31-93.68-140.16-92.23c0,0,22.51-130.72-58.1-130.72s-106.03,2.18-107.48,74.8Z"
    },
    {
        id: 12, // 1
        size: 50,
        speed: 0.2,
        numParticles: 220,
        screen: "xl",
        initialPos: {
            x: 1500,
            y: 50,
        },
        direction: "backward",
        path: "m756.88,155.39c-71.23-29.09-130-136.25-286.71-93.39C313.46,104.87,3.6,69.66.04,117.11c-3.56,47.46,224.38,41.33,370.41,59.71,146.03,18.37,350.82,79.61,496.84,79.61s156.71-38.27,156.71-59.71-195.89-12.25-267.12-41.33Z"
    }, 
    {
        id: 13, // 2
        size: 100,
        speed: 0.4,
        numParticles: 200,
        screen: "xl",
        initialPos: {
            x: 1025,
            y: 20
        },
        direction: "backward",
        path: "m493.01,68.55s-51.49-13.31-55.69,38.03c-4.2,51.34,115.07,54,114.12,53.05s-146.84-3.61-143.98,22.05c2.85,25.67,9.51,74.15,51.34,48.48,0,0-20.47,56.35,60.34,39.23,80.81-17.11,48.99-89.62,48.99-89.62,0,0,91.7,32.13,112.61,32.13s38.98-20.91,41.83-18.06c2.85,2.85-.95,35.17,19.01,33.27,19.96-1.9,23.76,32.16,41.82,33.11,18.06.95-117.3,79.4-117.3,79.4,0,0-53.24-18.37-62.74-15.52-9.51,2.85-53.59,31.85-82.11,20.44-28.52-11.41-100.77-31.36-120.73.96-19.96,32.31-78.9-81.75-149.25,0,0,0-84.61-69.41-122.64-5.71-38.03,63.69,0,92.21,0,92.21,0,0-111.23-15.21-115.98,53.24-4.75,68.45,78.9,67.5,97.92,63.69,0,0-69.4,12.36-25.67,36.13,43.73,23.77,103.62-27.57,103.62-27.57,0,0-12.36,102.67,92.21,85.56,104.57-17.11,93.16-97.92,93.16-97.92,0,0,20.91,81.76,87.46,72.25,66.55-9.51,73.2-66.55,73.2-110.28,0,0,30.42,115.03,91.26,77,60.84-38.03,35.17-108.38,38.98-126.44,0,0,66.55,51.34,80.81,5.7,14.26-45.63-45.63-92.21-45.63-92.21,0,0,313.5-11.91,311.6-104.12-1.9-92.21-102.67-100.77-102.67-100.77,0,0,45.63-93.16-38.98-92.21,0,0-61.34-64.87-133.6-9.73,0,0-196.72-99.41-243.3,4.21Z"
    }, 
    {
        id: 14, // 3
        size: 50,
        speed: 0.2,
        numParticles: 250,
        screen: "xl",
        initialPos: {
            x: 700, // 500 750
            y: 5
        },
        direction: "forward",
        path: "m106.06,103.31s1.85-93.62,72.3-93.62,81.77,32.45,82.6,74.15c0,0,134.5-57.31,153.04,45.58,0,0,58.2-4.8,59.13,35.06s-70.45,48.2-70.45,48.2c0,0-49.13,65.81-137.18,30.59,0,0-68.59,92.69-124.2-14.83,0,0-126.06,16.68-133.48-39.85C.39,132.04,37.47,109.8,106.06,103.3h0Z"
    },
    {
        id: 15, // 4
        size: 70,
        speed: 0.5,
        numParticles: 150,
        screen: "xl",
        initialPos: {
            x: 1025,
            y: 10
        },
        direction: "forward",
        path: "m267.62,101.54c71.23,29.09,130,136.25,286.71,93.39,156.71-42.87,466.57-7.65,470.13-55.11,3.56-47.46-224.38-41.33-370.41-59.71C508.03,61.74,303.24.5,157.21.5c-146.03,0-156.71,38.27-156.71,59.71,0,21.43,195.89,12.25,267.12,41.33Z"
    }
]



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
    constructor(numParticles, size, path, initialPos, context, canvas) {
        this.particles = [];

        this.particleBounds = path;
        this.ctx = context;
        this.canvas = canvas;

        let maxSize = size + 10;
        let minSize = size - 10;


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
    constructor(canvas, context, cloudData) {
        this.canvas = canvas;
        this.ctx = context;

        this.cloudOutline = new Path2D(cloudData.path);


        this.animate = this.animate.bind(this);
        this.isMoving = false;

        this.initialPos = cloudData.initialPos;

        this.cloudX = 0;
        this.cloudY = 0;
        this.speedY = 0;
        this.speedX = cloudData.speed;

        this.direction = cloudData.direction;

        if (this.direction === "forward") {
            this.speedX = cloudData.speed;
            this.initialPos.x = -this.initialPos.x;
        } else {
            this.speedX = -cloudData.speed;
            this.initialPos.x = this.canvas.width;
        }

        this.initialPos.y = this.initialPos.y * Math.round(window.innerHeight / 100);

        this.cloud = new ParticleSystem(cloudData.numParticles, cloudData.size, this.cloudOutline, this.initialPos, this.ctx, this.canvas);

        
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

        if (this.direction === "forward") {
            if (this.cloudX + this.initialPos.x > this.canvas.width) this.cloudX = 0;
        } else {
            if (this.cloudX < -(this.canvas.width + this.initialPos.x)) {
                this.cloudX = 0 + this.initialPos.x;
            }
        }

        requestAnimationFrame(this.animate);
    }

    startAnimation() {
        this.isMoving = true;
        this.animate();
    }

    pauseAnimation() {
        this.isMoving = false;
    }
}


class ResponsiveCanvas {
    constructor(canvasId, cloudId) {
        this.clouds = cloudPaths;
        this.cloudId = cloudId;
        this.cloudData = this.clouds[cloudId];

        // init canvas
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.initializeCanvas();

        // init off screen canvas
        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCtx = this.offscreenCanvas.getContext('2d');
        this.offscreenCanvas.width = this.canvas.width;
        this.offscreenCanvas.height = this.canvas.height;

        // init responsive clouds
        this.newCloud = new Cloud(
            this.canvas,
            this.ctx,
            this.clouds[this.cloudId]
        );

        window.addEventListener('resize', () => this.resizeCanvas());
    }

    initializeCanvas() {
        if (this.cloudData.screen === "xs" && window.innerWidth > 480) {
            this.canvas.width = 480;
        } else if (this.cloudData.screen === "s" && (window.innerWidth < 481 || window.innerWidth > 768)) {
            this.canvas.width = 768;
        } else if (this.cloudData.screen === "m & l" && (window.innerWidth < 769 || window.innerWidth > 1024)) {
            this.canvas.width = 1024;
        } else if (this.cloudData.screen === "xl" && (window.innerWidth < 1201)) {
            this.canvas.width = 1201;
        } else {
            this.canvas.width = window.innerWidth;
        }
        
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

    clearCanvas() {
        this.newCloud.pauseAnimation();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


/* runner code */

const responsiveCanvas = [];
let i = 0;

for (let i = 0; i < cloudPaths.length; i++) {
// for (let i = 0; i < 4; i++) {
    let canvasName = "canvas".concat(i.toString());
    responsiveCanvas.push(new ResponsiveCanvas(canvasName, i));
}

// responsiveCanvas.forEach((x) => {
//     x.newCloud.startAnimation();
// });