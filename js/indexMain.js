// NAVBAR
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


// START SCROLL TOP
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// END SCROLL TOP



const image = new Image();
image.src = 'data:image/jpeg;base64,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';
image.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 525;
    canvas.height = 200;

    let particlesArray = [];
    const numberOfParticles = 8000;
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
            this.velocity = Math.random() * 0.6;
            this.size = Math.random() * 5;
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
            let movement = (0.5 - this.speed) + this.velocity;
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
            ctx.fillStyle = 'black';
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
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.3;
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.3;
            particlesArray[i].draw();
        }
        requestAnimationFrame( animate );
    }
    animate();

    function calculateBrightness(red, green, blue){
        return Math.sqrt(
            (red * red) * 0.259 +
            (green * green) * 0.577 +
            (blue * blue) * 0.123
        );
    }

});




