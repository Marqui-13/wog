// NAVBAR START
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
// NAVBAR END

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


// PARTICLE IMAGE ANIMATION START
const image = new Image();
image.src = 'data:image/jpg;base64,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';
image.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    let particlesArray = [];
    const numberOfParticles = 10000;
    const detail = 10;

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
            this.velocity = Math.random() * 3.0;
            this.size = Math.random() * 2.0;
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
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.3;
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.9;
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



