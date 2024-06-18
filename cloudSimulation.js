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

        // TODO: adjust restart position here
        // if (this.cloudX > this.canvas.width) this.cloudX = 0;
        //     if (this.cloudY > this.canvas.height) this.cloudY = 0;
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

// things to include
// particle size
// particle number
// initialPosition
// path

const xsCloudPaths = [
    {
        id: 0,
        size: 50,
        speed: 1.5,
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
        id: 1,
        size: 50,
        speed: 0.5,
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
        id: 2,
        size: 40,
        speed: 0.5,
        numParticles: 300,
        screen: "xs",
        initialPos: {
            x: 580,
            y: 30
        },
        direction: "backward",
        path: "m230.17,30.54s-23.86-6.17-25.8,17.62c-1.95,23.79,53.31,25.02,52.87,24.58s-68.03-1.67-66.71,10.22c1.32,11.89,4.4,34.36,23.79,22.46,0,0-9.48,26.11,27.96,18.18,37.44-7.93,22.7-41.52,22.7-41.52,0,0,42.49,14.89,52.18,14.89s18.06-9.69,19.38-8.37-.44,16.3,8.81,15.42,11.01,14.9,19.38,15.34c8.37.44-54.35,36.79-54.35,36.79,0,0-24.67-8.51-29.07-7.19-4.4,1.32-24.83,14.76-38.05,9.47-13.21-5.29-46.69-14.53-55.94.44-9.25,14.97-36.56-37.88-69.15,0,0,0-39.2-32.16-56.82-2.65-17.62,29.51,0,42.73,0,42.73,0,0-51.54-7.05-53.74,24.67-2.2,31.71,36.56,31.27,45.37,29.51,0,0-32.15,5.73-11.89,16.74,20.26,11.01,48.01-12.77,48.01-12.77,0,0-5.73,47.57,42.73,39.64,48.45-7.93,43.17-45.37,43.17-45.37,0,0,9.69,37.88,40.52,33.48,30.83-4.4,33.92-30.83,33.92-51.1,0,0,14.1,53.3,42.29,35.68,28.19-17.62,16.3-50.21,18.06-58.58,0,0,30.83,23.79,37.44,2.64,6.61-21.14-21.14-42.73-21.14-42.73,0,0,145.26-5.52,144.38-48.24s-47.57-46.69-47.57-46.69c0,0,21.14-43.17-18.06-42.73,0,0-28.42-30.05-61.9-4.51,0,0-91.15-46.06-112.73,1.95Z"
    }, 
    {
        id: 3,
        size: 50,
        speed: 1,
        numParticles: 250,
        screen: "xs",
        initialPos: {
            x: 1000, // 500 
            y: 5
        },
        direction: "forward",
        path: "m106.06,103.31s1.85-93.62,72.3-93.62,81.77,32.45,82.6,74.15c0,0,134.5-57.31,153.04,45.58,0,0,58.2-4.8,59.13,35.06s-70.45,48.2-70.45,48.2c0,0-49.13,65.81-137.18,30.59,0,0-68.59,92.69-124.2-14.83,0,0-126.06,16.68-133.48-39.85C.39,132.04,37.47,109.8,106.06,103.3h0Z"
    },
    {
        id: 4,
        size: 45,
        speed: 1.5,
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
        id: 5,
        size: 30,
        speed: 0.5,
        numParticles: 400,
        screen: "xs",
        initialPos: {
            x: 570,
            y: 0
        },
        direction: "forward",
        path: "M375.2,40.5c-66.3-20.9-134.5,0-136.6,23.6c-2.1,23.6-105.1-38.5-150.3-27.3S0.1,95.8-70.3,84c-70.4-11.8-89.3-55.3-127.2-42.3s-115.6,25.5-112.4,47.9s72.5-1.9,158.7,13.7c86.2,15.5,163.8-11.8,250.6-3.7c86.8,8.1,296.9,87.6,290.6,29.2c-6.3-58.4,191.5-58.4,193.5-80.8S441.6,61.3,375.2,40.5L375.2,40.5z"
    },
]


class ResponsiveCanvas {
    constructor(canvasId, cloudId) {
        this.canvas = document.getElementById(canvasId);
        

        this.ctx = this.canvas.getContext('2d');
        

        this.responsiveScale;

        this.clouds = xsCloudPaths;

        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCtx = this.offscreenCanvas.getContext('2d');

        this.initializeCanvas();
        this.offscreenCanvas.width = this.canvas.width;
        this.offscreenCanvas.height = this.canvas.height;


        this.newCloud = new Cloud(
            this.canvas,
            this.ctx,
            this.clouds[cloudId]
        );

        window.addEventListener('resize', () => this.resizeCanvas());
    }

    initializeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        if (this.canvas.width < 480) {
            this.responsiveScale = "xs";
        } else if (this.canvas.width < 769) {
            this.responsiveScale = "s";
        } else if (this.canvas.width < 1025) {
            this.responsiveScale = "m";
        } else if (this.canvas.width < 1201) {
            this.responsiveScale = "l";
        } else {
            this.responsiveScale = "xl";
        }
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


const responsiveCanvas = [];
for (let i = 0; i < 6; i++) {
    let canvasName = "canvas".concat(i.toString());
    responsiveCanvas.push(new ResponsiveCanvas(canvasName, i));
}


// xs
responsiveCanvas[3].newCloud.startAnimation();
responsiveCanvas[1].newCloud.startAnimation();
responsiveCanvas[0].newCloud.startAnimation();
responsiveCanvas[4].newCloud.startAnimation();

// s

