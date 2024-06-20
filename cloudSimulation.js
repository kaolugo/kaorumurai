// cloudSimulation.js

const cloudPaths = [
    {
        id: 0, // 0
        size: 50,
        speed: 0.5,
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
        id: 2, // 2
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
        id: 3, // 3
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
        id: 4, // 4
        size: 45,
        speed: 0.5,
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
        id: 5, // 5
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
    {
        id: 6, // 0
        size: 50,
        speed: 0.5,
        numParticles: 375,
        screen: "s",
        initialPos: {
            x: 750,
            y: 0
        },
        direction: "backward",
        path: "m282.27,139.07s-73.22-2.25-72.09,36.05c0,0-64.21-17.51-67.58,40.24-3.38,57.76,69.84,49.87,69.84,49.87,0,0-194.87-34.92-198.25,59.7-3.38,94.62-29.29,154.32,241.05,149.81,270.34-4.51,334.54.24,334.54.24,0,0,168.96,32.43,166.71-106.12-2.25-138.55-150.94-145.31-217.4-143.05,0,0,34.92-202.75-90.11-202.75s-164.46,3.38-166.71,116.02Z"
    },
    {
        id: 7, // 1
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
        id: 8, // 2
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
        id: 9, // 3
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
        id: 10, // 4
        size: 45,
        speed: 0.5,
        numParticles: 120,
        screen: "s",
        initialPos: {
            x: 800,
            y: 10
        },
        direction: "forward",
        path: "m200.84,92.85c52.63,21.49,96.05,100.67,211.84,69s344.73-5.66,347.36-40.72c2.63-35.07-165.79-30.54-273.68-44.11C378.47,63.44,227.15,18.19,119.26,18.19c-107.89,0-115.79,28.28-115.79,44.11,0,15.84,144.73,9.05,197.37,30.54Z"
    },
    {
        id: 11, // 5
        size: 30,
        speed: 0.2,
        numParticles: 600,
        screen: "s",
        initialPos: {
            x: 800,
            y: 15
        },
        direction: "forward",
        path: "m569.02,55.6c-52.44-27.87-106.31,0-107.97,31.56s-83.05-51.49-118.77-36.54c-35.71,14.95-69.76,78.9-125.41,63.12-55.65-15.78-70.6-73.92-100.49-56.48-29.9,17.44-91.36,34.05-88.87,63.95,2.49,29.9,57.31-2.49,125.41,18.27,68.1,20.76,129.46-15.78,198.03-4.98,68.57,10.8,234.68,117.11,229.69,39.04-4.98-78.07,151.36-78.07,152.92-107.97,1.56-29.9-112.11,17.9-164.55-9.97Z"
    },
    {
        id: 12, // 0
        size: 50,
        speed: 0.4,
        numParticles: 250,
        screen: "m",
        initialPos: {
            x: 500,
            y: 40
        },
        direction: "backward",
        path: "m174.25,76.86s-47.2-1.45-46.48,23.24c0,0-41.39-11.29-43.57,25.95s45.03,32.15,45.03,32.15c0,0-125.64-22.51-127.81,38.49s-18.88,99.49,155.41,96.59c174.29-2.9,215.69.15,215.69.15,0,0,108.93,20.91,107.48-68.42s-97.31-93.68-140.16-92.23c0,0,22.51-130.72-58.1-130.72s-106.03,2.18-107.48,74.8Z"
        // path: "m371.98,179.7s-100.7-3.1-99.15,49.58c0,0-88.31-24.09-92.96,55.35-4.65,79.44,96.05,68.59,96.05,68.59,0,0-268.02-48.03-272.67,82.11-4.65,130.14-40.28,212.25,331.54,206.05,371.82-6.2,460.13.33,460.13.33,0,0,232.39,44.6,229.29-145.96-3.1-190.56-207.6-199.86-299.01-196.76,0,0,48.03-278.87-123.94-278.87s-226.19,4.65-229.29,159.57Z"
    },
    {
        id: 13, // 1
        size: 50,
        speed: 0.2,
        numParticles: 220,
        screen: "m",
        initialPos: {
            x: 1500,
            y: 50,
        },
        direction: "backward",
        path: "m756.88,155.39c-71.23-29.09-130-136.25-286.71-93.39C313.46,104.87,3.6,69.66.04,117.11c-3.56,47.46,224.38,41.33,370.41,59.71,146.03,18.37,350.82,79.61,496.84,79.61s156.71-38.27,156.71-59.71-195.89-12.25-267.12-41.33Z"
    }, 
    {
        id: 14, // 2
        size: 100,
        speed: 0.4,
        numParticles: 200,
        screen: "m",
        initialPos: {
            x: 1025,
            y: 20
        },
        direction: "backward",
        path: "m493.01,68.55s-51.49-13.31-55.69,38.03c-4.2,51.34,115.07,54,114.12,53.05s-146.84-3.61-143.98,22.05c2.85,25.67,9.51,74.15,51.34,48.48,0,0-20.47,56.35,60.34,39.23,80.81-17.11,48.99-89.62,48.99-89.62,0,0,91.7,32.13,112.61,32.13s38.98-20.91,41.83-18.06c2.85,2.85-.95,35.17,19.01,33.27,19.96-1.9,23.76,32.16,41.82,33.11,18.06.95-117.3,79.4-117.3,79.4,0,0-53.24-18.37-62.74-15.52-9.51,2.85-53.59,31.85-82.11,20.44-28.52-11.41-100.77-31.36-120.73.96-19.96,32.31-78.9-81.75-149.25,0,0,0-84.61-69.41-122.64-5.71-38.03,63.69,0,92.21,0,92.21,0,0-111.23-15.21-115.98,53.24-4.75,68.45,78.9,67.5,97.92,63.69,0,0-69.4,12.36-25.67,36.13,43.73,23.77,103.62-27.57,103.62-27.57,0,0-12.36,102.67,92.21,85.56,104.57-17.11,93.16-97.92,93.16-97.92,0,0,20.91,81.76,87.46,72.25,66.55-9.51,73.2-66.55,73.2-110.28,0,0,30.42,115.03,91.26,77,60.84-38.03,35.17-108.38,38.98-126.44,0,0,66.55,51.34,80.81,5.7,14.26-45.63-45.63-92.21-45.63-92.21,0,0,313.5-11.91,311.6-104.12-1.9-92.21-102.67-100.77-102.67-100.77,0,0,45.63-93.16-38.98-92.21,0,0-61.34-64.87-133.6-9.73,0,0-196.72-99.41-243.3,4.21Z"
    }, 
    {
        id: 15, // 3
        size: 50,
        speed: 0.2,
        numParticles: 250,
        screen: "m",
        initialPos: {
            x: 700, // 500 750
            y: 5
        },
        direction: "forward",
        path: "m106.06,103.31s1.85-93.62,72.3-93.62,81.77,32.45,82.6,74.15c0,0,134.5-57.31,153.04,45.58,0,0,58.2-4.8,59.13,35.06s-70.45,48.2-70.45,48.2c0,0-49.13,65.81-137.18,30.59,0,0-68.59,92.69-124.2-14.83,0,0-126.06,16.68-133.48-39.85C.39,132.04,37.47,109.8,106.06,103.3h0Z"

        // path: "m217.83,222.95s4.07-205.6,158.79-205.6,179.58,71.26,181.4,162.85c0,0,295.39-125.85,336.1,100.1,0,0,127.82-10.53,129.86,76.99,2.04,87.53-154.72,105.86-154.72,105.86,0,0-107.9,144.54-301.28,67.17,0,0-150.63,203.56-272.78-32.57,0,0-276.86,36.64-293.15-87.53-16.29-124.17,65.15-173.03,215.78-187.29v.02Z"
        // path: "m172.95,170.56s2.92-147.51,113.92-147.51,128.84,51.12,130.15,116.84c0,0,211.93-90.29,241.13,71.82,0,0,91.7-7.56,93.17,55.24s-111,75.95-111,75.95c0,0-77.41,103.7-216.16,48.19,0,0-108.07,146.04-195.7-23.37,0,0-198.63,26.29-210.32-62.8-11.69-89.08,46.74-124.14,154.81-134.37h0Z"
    },
    {
        id: 16, // 4
        size: 70,
        speed: 0.5,
        numParticles: 150,
        screen: "m",
        initialPos: {
            x: 1025,
            y: 10
        },
        direction: "forward",
        path: "m267.62,101.54c71.23,29.09,130,136.25,286.71,93.39,156.71-42.87,466.57-7.65,470.13-55.11,3.56-47.46-224.38-41.33-370.41-59.71C508.03,61.74,303.24.5,157.21.5c-146.03,0-156.71,38.27-156.71,59.71,0,21.43,195.89,12.25,267.12,41.33Z"
    },
    {
        id: 17, // 5
        size: 30,
        speed: 0.5,
        numParticles: 880,
        screen: "m",
        initialPos: {
            x: 1025,
            y: 0
        },
        direction: "forward",
        path: "m781.87,64.38c-76.04-40.41-154.16,0-156.57,45.77-2.41,45.77-120.44-74.67-172.23-52.99-51.79,21.68-101.17,114.42-181.86,91.53-80.69-22.88-102.37-107.19-145.73-81.9C82.12,92.08-7,116.17-3.39,159.53c3.61,43.36,83.1-3.61,181.86,26.5,98.76,30.11,187.73-22.88,287.17-7.23,99.44,15.66,340.31,169.82,333.09,56.61-7.23-113.21,219.49-113.21,221.75-156.57,2.26-43.36-162.58,25.96-238.61-14.45Z"
    },
    {
        id: 18, // 0
        size: 50,
        speed: 0.5,
        numParticles: 625,
        screen: "l",
        initialPos: {
            x: 1200,
            y: 50
        },
        direction: "backward",
        path: "m435.87,214.55s-118.01-3.63-116.19,58.1c0,0-103.49-28.23-108.93,64.86-5.45,93.09,112.56,80.38,112.56,80.38,0,0-314.09-56.28-319.54,96.22-5.45,152.51-47.2,248.73,388.53,241.47,435.73-7.26,539.22.38,539.22.38,0,0,272.33,52.27,268.7-171.05-3.63-223.31-243.28-234.21-350.4-230.57,0,0,56.28-326.8-145.24-326.8s-265.07,5.45-268.7,187Z"
    },
    {
        id: 19, // 1
        size: 50,
        speed: 0.5,
        numParticles: 250,
        screen: "l",
        initialPos: {
            x: 1200,
            y: 50,
        },
        direction: "backward",
        path: "m886.97,185.14c-83.47-34.09-152.34-159.67-335.99-109.44C367.34,125.93,4.22,84.67.05,140.28c-4.17,55.62,262.95,48.44,434.07,69.97,171.12,21.53,411.11,93.29,582.24,93.29s183.64-44.85,183.64-69.97-229.56-14.35-313.03-48.44Z"
    }, 
    {
        id: 20, // 2
        size: 40,
        speed: 0.5,
        numParticles: 750,
        screen: "l",
        initialPos: {
            x: 1200,
            y: 30
        },
        direction: "backward",
        path: "m577.2,73.16s-61.84-15.98-66.89,45.67c-5.05,61.66,138.2,64.85,137.06,63.71s-176.36-4.34-172.93,26.49c3.43,30.83,11.42,89.06,61.66,58.23,0,0-24.58,67.67,72.47,47.12,97.05-20.55,58.84-107.64,58.84-107.64,0,0,110.13,38.59,135.25,38.59s46.81-25.12,50.24-21.69c3.43,3.43-1.14,42.25,22.84,39.96,23.98-2.28,28.53,38.63,50.23,39.77,21.69,1.14-140.89,95.36-140.89,95.36,0,0-63.94-22.06-75.36-18.64-11.42,3.43-64.37,38.25-98.62,24.55-34.25-13.7-121.03-37.66-145.01,1.15-23.98,38.81-94.77-98.18-179.26,0,0,0-101.62-83.36-147.29-6.86-45.67,76.5,0,110.75,0,110.75,0,0-133.59-18.27-139.3,63.94-5.71,82.21,94.77,81.07,117.6,76.5,0,0-83.35,14.84-30.83,43.39,52.52,28.54,124.45-33.11,124.45-33.11,0,0-14.84,123.31,110.75,102.76,125.6-20.55,111.89-117.6,111.89-117.6,0,0,25.12,98.19,105.04,86.78,79.92-11.42,87.92-79.92,87.92-132.45,0,0,36.54,138.16,109.61,92.48,73.07-45.67,42.25-130.16,46.81-151.86,0,0,79.92,61.66,97.05,6.85,17.13-54.81-54.81-110.75-54.81-110.75,0,0,376.53-14.31,374.25-125.06-2.28-110.75-123.31-121.03-123.31-121.03,0,0,54.81-111.89-46.81-110.75,0,0-73.68-77.91-160.45-11.68,0,0-236.27-119.39-292.21,5.06Z"
    }, 
    {
        id: 21, // 3
        size: 50,
        speed: 0.5,
        numParticles: 625,
        screen: "l",
        initialPos: {
            x: 2500, // 500 
            y: 5
        },
        direction: "forward",
        path: "m255.27,261.03s4.77-240.94,186.08-240.94,210.44,83.51,212.58,190.84c0,0,346.16-147.48,393.87,117.31,0,0,149.79-12.34,152.18,90.23,2.39,102.57-181.31,124.05-181.31,124.05,0,0-126.45,169.38-353.07,78.72,0,0-176.52,238.55-319.66-38.17,0,0-324.45,42.94-343.53-102.57-19.09-145.51,76.35-202.77,252.87-219.48v.02Z"
    },
    {
        id: 22, // 4
        size: 45,
        speed: 0.5,
        numParticles: 200,
        screen: "l",
        initialPos: {
            x: 1200,
            y: 10
        },
        direction: "forward",
        path: "m313.03,145.91c83.47,34.09,152.34,159.67,335.99,109.44,183.64-50.23,546.76-8.97,550.93-64.59,4.17-55.62-262.95-48.44-434.07-69.97C594.76,99.27,354.77,27.5,183.64,27.5,12.52,27.5,0,72.35,0,97.47c0,25.12,229.56,14.35,313.03,48.44Z"
    },
    {
        id: 23, // 5
        size: 30,
        speed: 0.5,
        numParticles: 1000,
        screen: "l",
        initialPos: {
            x: 1200,
            y: 0
        },
        direction: "forward",
        path: "m916.85,74.48c-89.11-47.36-180.66,0-183.48,53.63-2.82,53.63-141.14-87.51-201.83-62.1-60.69,25.4-118.56,134.08-213.12,107.27-94.56-26.82-119.97-125.61-170.78-95.97C96.84,106.95-7.6,135.17-3.37,185.98c4.23,50.81,97.39-4.23,213.12,31.05,115.73,35.28,220-26.82,336.53-8.47,116.53,18.35,398.8,199.01,390.33,66.34-8.47-132.67,257.22-132.67,259.87-183.48,2.65-50.81-190.52,30.42-279.63-16.94Z"
    },
    {
        id: 24, // 0
        size: 50,
        speed: 0.5,
        numParticles: 800,
        screen: "xl",
        initialPos: {
            x: 1500,
            y: 50
        },
        direction: "backward",
        path: "m544.78,273.95s-147.51-4.54-145.24,72.62c0,0-129.36-35.28-136.17,81.08-6.81,116.36,140.7,100.48,140.7,100.48,0,0-392.61-70.35-399.42,120.28-6.81,190.63-59.01,310.91,485.66,301.83,544.66-9.08,674.02.48,674.02.48,0,0,340.42,65.33,335.88-213.81-4.54-279.14-304.1-292.76-438-288.22,0,0,70.35-408.5-181.55-408.5s-331.34,6.81-335.88,233.75Z"
    },
    {
        id: 25, // 1
        size: 50,
        speed: 0.5,
        numParticles: 320,
        screen: "xl",
        initialPos: {
            x: 1500,
            y: 50,
        },
        direction: "backward",
        path: "m1108.71,235.84c-104.34-42.61-190.43-199.59-419.98-136.8C459.17,161.84,5.28,110.26.06,179.78c-5.22,69.52,328.68,60.55,542.59,87.46,213.9,26.91,513.89,116.61,727.8,116.61s229.56-56.06,229.56-87.46-286.94-17.94-391.29-60.55Z"
    }, 
    {
        id: 26, // 2
        size: 40,
        speed: 0.5,
        numParticles: 960,
        screen: "xl",
        initialPos: {
            x: 1500,
            y: 30
        },
        direction: "backward",
        path: "m721.5,92.23s-77.3-19.98-83.61,57.09c-6.31,77.07,172.75,81.07,171.32,79.64s-220.45-5.42-216.16,33.11c4.28,38.54,14.27,111.32,77.07,72.79,0,0-30.73,84.59,90.59,58.9,121.31-25.69,73.55-134.55,73.55-134.55,0,0,137.67,48.24,169.07,48.24s58.52-31.4,62.8-27.12c4.28,4.28-1.43,52.81,28.54,49.95,29.97-2.85,35.67,48.28,62.78,49.71,27.12,1.43-176.11,119.2-176.11,119.2,0,0-79.92-27.58-94.2-23.3-14.27,4.28-80.46,47.81-123.27,30.69-42.82-17.13-151.29-47.07-181.26,1.44-29.97,48.51-118.46-122.73-224.07,0,0,0-127.02-104.2-184.11-8.58-57.09,95.62,0,138.44,0,138.44,0,0-166.99-22.84-174.12,79.92-7.14,102.76,118.46,101.33,147,95.62,0,0-104.19,18.55-38.54,54.23,65.65,35.68,155.57-41.39,155.57-41.39,0,0-18.55,154.14,138.44,128.45,156.99-25.69,139.87-147,139.87-147,0,0,31.4,122.74,131.3,108.47,99.91-14.27,109.9-99.91,109.9-165.56,0,0,45.67,172.69,137.01,115.61,91.34-57.09,52.81-162.7,58.52-189.82,0,0,99.91,77.07,121.31,8.56,21.41-68.51-68.51-138.44-68.51-138.44,0,0,470.66-17.88,467.81-156.32-2.85-138.44-154.14-151.29-154.14-151.29,0,0,68.51-139.87-58.52-138.44,0,0-92.1-97.38-200.57-14.6,0,0-295.33-149.24-365.27,6.32Z"
    }, 
    {
        id: 27, // 3
        size: 50,
        speed: 0.5,
        numParticles: 800,
        screen: "xl",
        initialPos: {
            x: 3000, // 500 
            y: 5
        },
        direction: "forward",
        path: "m319.59,301.68S325.55.5,552.19.5s263.05,104.38,265.72,238.55c0,0,432.7-184.36,492.33,146.64,0,0,187.23-15.43,190.23,112.78,2.99,128.21-226.64,155.06-226.64,155.06,0,0-158.06,211.73-441.33,98.4,0,0-220.65,298.18-399.57-47.72,0,0-405.56,53.67-429.42-128.21-23.86-181.89,95.43-253.46,316.08-274.35v.03Z"
    },
    {
        id: 28, // 4
        size: 45,
        speed: 0.5,
        numParticles: 260,
        screen: "xl",
        initialPos: {
            x: 1500,
            y: 10
        },
        direction: "forward",
        path: "m391.29,182.39c104.34,42.61,190.43,199.59,419.98,136.8,229.56-62.79,683.45-11.21,688.67-80.73,5.22-69.52-328.68-60.55-542.59-87.46C743.45,124.08,443.46,34.38,229.56,34.38,15.65,34.38,0,90.44,0,121.84c0,31.4,286.94,17.94,391.29,60.55Z"
    },
    {
        id: 29, // 5
        size: 30,
        speed: 0.5,
        numParticles: 1280,
        screen: "xl",
        initialPos: {
            x: 1500,
            y: 0
        },
        direction: "forward",
        path: "m1146.94,91.7c-111.38-59.19-225.82,0-229.35,67.04-3.53,67.04-176.42-109.38-252.28-77.63-75.86,31.76-148.2,167.6-266.4,134.08-118.2-33.52-149.96-157.02-213.47-119.97C121.92,132.28-8.63,167.56-3.34,231.08c5.29,63.51,121.73-5.29,266.4,38.81,144.67,44.11,275-33.52,420.66-10.59,145.66,22.93,498.5,248.76,487.92,82.92-10.59-165.84,321.52-165.84,324.83-229.35,3.31-63.51-238.15,38.02-349.53-21.17Z"
    },
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
        console.log("animate");
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


class ResponsiveCanvas {
    constructor(canvasId, cloudId) {
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
        this.clouds = cloudPaths;
        this.cloudId = cloudId;
        this.responsiveScale = this.determineScale();
        this.currentId = this.cloudId + 6 * this.responsiveScale;


        this.newCloud = new Cloud(
            this.canvas,
            this.ctx,
            this.clouds[this.currentId]
        );

        window.addEventListener('resize', () => this.resizeCanvas());
    }

    initializeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }


    resizeCanvas() {
        console.log("resize fired");
        // save current canvas content to offscreen context
        this.offscreenCanvas.width = this.canvas.width;
        this.offscreenCanvas.height = this.canvas.height;
        this.offscreenCtx.drawImage(this.canvas, 0, 0);

        this.initializeCanvas();

        this.ctx.drawImage(this.offscreenCanvas, 0, 0);

        // TODO: add here
        let newScale = this.determineScale();
        if (newScale !== this.responsiveScale) {
            console.log("new breakpoint");
            this.responsiveScale = newScale;

            // prep new canvases
            this.clearCanvas();
            this.addCloudByScale();
            this.newCloud.startAnimation();
        }
    }

    addCloudByScale() {
        let id = this.cloudId + 6 * this.responsiveScale;
        this.newCloud = new Cloud(
            this.canvas,
            this.ctx,
            this.clouds[id]
        );
    }

    clearCanvas() {
        console.log("clear canvas fired");
        this.newCloud.pauseAnimation();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    determineScale() {
        // xs
        if (this.canvas.width < 480) {
            return 0;
        // s
        } else if (this.canvas.width < 769) {
            return 1;
        // m, l
        } else if (this.canvas.width < 1201) {
            return 1;
        // xl
        } else {
            return 2;
        }
    }
}


const responsiveCanvas = [];
for (let i = 0; i < 6; i++) {
    let index = i + 12;
    let canvasName = "canvas".concat(i.toString());
    responsiveCanvas.push(new ResponsiveCanvas(canvasName, index));
}


// xs
// responsiveCanvas[3].newCloud.startAnimation();
// responsiveCanvas[1].newCloud.startAnimation();
// responsiveCanvas[0].newCloud.startAnimation();
// responsiveCanvas[4].newCloud.startAnimation();

// s
// + 6
// responsiveCanvas[1].newCloud.startAnimation();
// responsiveCanvas[2].newCloud.startAnimation();
// responsiveCanvas[3].newCloud.startAnimation();

// m & l
// + 6 
// responsiveCanvas[1].newCloud.startAnimation();
// responsiveCanvas[2].newCloud.startAnimation();
// responsiveCanvas[3].newCloud.startAnimation();
// responsiveCanvas[5].newCloud.startAnimation();

// xl
// + 12
setTimeout(() => {responsiveCanvas[0].newCloud.startAnimation()}, 40000);
responsiveCanvas[1].newCloud.startAnimation(); // delay starts
responsiveCanvas[2].newCloud.startAnimation();
responsiveCanvas[3].newCloud.startAnimation();
responsiveCanvas[4].newCloud.startAnimation();

// setTimeout(() => {
//     for (let i = 0; i < 6; i++) {
//         // let index = i + 12;
//         // let canvasName = "canvas".concat(i.toString());
//         // responsiveCanvas.push(new ResponsiveCanvas(canvasName, index));
//         responsiveCanvas[i].clearCanvas();
//     }
// }, 10000);


