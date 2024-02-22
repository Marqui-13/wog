// NAVBAR START
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
// NAVBAR END



// PARTICLE IMAGE ANIMATION START
const image = new Image();
image.src = 'data:image/jpeg;base64,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'
  image.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    let particlesArray = [];
    const numberOfParticles = 3000;
    const detail = 3;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let grid = [];
    for (let y = 0; y < canvas.height; y += detail){
        let row = [];
        for (let x = 0; x < canvas.width; x += detail){
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)]
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)]
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)]
            const color = 'rgb(' + red +',' + green + ',' + blue + ')';
            const brightness = calculateBrightness(red, green, blue)/100;
            const cell = [
                cellColor = color,
                cellBrightness = brightness,
            ];
            row.push(cell);
        }  
        grid.push(row); 
    }
    console.log(grid);
    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            //this.prevX = this.x;
            this.speed = 0;
            this.velocity = Math.random() * 2.0;
            this.size = Math.random() * 4.0;
            this.position1 = Math.floor(this.y / detail);
            this.position2 = Math.floor(this.x / detail);
            this.angle = 0;
        }
        update () {
            this.position1 = Math.floor(this.y / detail);
            this.position2 = Math.floor(this.x / detail);
            if (grid[this.position1]){
                if (grid[this.position1][this.position2]){
                    this.speed = grid[this.position1][this.position2][1];
                }
            }
            this.angle += this.speed/20;
            let movement = (10 - this.speed) + this.velocity;
            this.y -= movement + Math.cos(this.angle) * 2;
            this.x += Math.cos(this.angle) * 2;
            if (this.y <= 0) {
                this.y = canvas.height;
                this.x = Math.random() * canvas.width;
            }
            //console.log(this.x += movement)
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            if (this.y > canvas.height - this.size * 6) ctx.globalAlpha = 0;
            if (grid[this.position1]){
                if (grid[this.position1][this.position2]){
                    ctx.fillStyle = grid[this.position1][this.position2][0];
                }

            } else {
                ctx.fillStyle = 'white';
            }
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();

        }
    }

    function init(){
        for (let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle());
        }
    }
    init();

    function animate () {
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.1;
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.5;
            particlesArray[i].draw();
        }
        requestAnimationFrame( animate );
    }
    animate();

    function calculateBrightness(red, green, blue){
        return Math.sqrt(
            (red * red) * 0.259 +
            (green * green) * 2 +
            (blue * blue) * 0.123
        );
    }

});
// PARTICLE IMAGE ANIMATION END



