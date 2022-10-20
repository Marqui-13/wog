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


// START MOUSE TRAILS
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let particleArray = [];

// GET MOUSE POSITION ///////////////////////////////
const mouse = {
	x: null,
	y: null
}
window.addEventListener('mousemove', function(event){
		mouse.x = event.x;
		mouse.y = event.y;
		//console.log(mouse);
});

// START JAVASCRIPT TOUCH EVENTS
window.addEventListener("touchstart", event => {
    mouse.x = event.changedTouches[0].clientX;
    mouse.y = event.changedTouches[0].clientY;
}, false);

window.addEventListener("touchmove", event => {
    //event.preventDefault();
    mouse.x = event.targetTouches[0].clientX;
    mouse.y = event.targetTouches[0].clientY;
}, false);

window.addEventListener("touchend", event => {
    //event.preventDefault();
    mouse.x = 0;
    mouse.y = 0;
}, false);
// END JAVASCRIPT TOUCH EVENTS

// SET MOUSE POSITION AS UNDEFINED EVERY 5 SEC(to prevent effect getting stuck in corners when mouse leaves window)//////
setInterval(function(){
	mouse.x = undefined;
	mouse.y = undefined;
}, 200);

// CREATE PARTICLE OBJECT ///////////////////
class Particle {
    constructor(x, y, size, color, weight){
        this.x = x;
        this.y = y;
        this.size = size;
        this.minSize = size;
        this.color = color;
        this.weight = weight;
    }
	draw(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.size,0,Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
	update(){
        this.size-=0.05;
        if (this.size < 0) {
            this.x = (mouse.x + ((Math.random() * 20) - 10));
            this.y = (mouse.y + ((Math.random() * 20) - 10));
            this.size = (Math.random()*15) + 2;
            this.weight = (Math.random() * 2) - 0.5;
        }
        this.y += this.weight;
        this.weight += 0.05;
                            
        // if it reaches bottom bounce
        if (this.y > canvas.height-this.size){
                this.weight *= -.5;
        };
	}
}

function init() {
    particleArray = [];
    for (let i = 0; i < 150; i++){
        let size = (Math.random() * 10) + 1;
        let x = Math.random() * (innerWidth - size * 2) + size;
        let y = canvas.height - 100;
        let color = 'pink';
        let weight = 1;
        particleArray.push(new Particle(x, y, size, color, weight));
    }

}

function animate(){
    ctx.fillStyle = 'rgba(0,0,0,.04)';
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        //particleArray[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
}
init();
animate();

// check if particles are close enough to draw line between them
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++){
            let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x))
            +   ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));
            if  (distance < (canvas.width/7) * (canvas.height/7))
            {   
                opacityValue = 1-(distance/5000);
                ctx.strokeStyle='rgba(255,255,255,' + opacityValue +')';

                /*
                let activeColor;
                if ( particleArray[a].x < canvas.width/2) {
                    activeColor = 'rgba(255,255,255,' + opacityValue +')';
                }
                else {
                     activeColor = 'rgba(54,50,55,' + opacityValue +')';;
                }
                */
                //ctx.strokeStyle= 'rgba(140,85,35,1)';
                //ctx.strokeStyle= 'rgba(140,85,35,'+opacityValue+')';
                //ctx.lineCap = 'round'; // for wide lines
                //ctx.setLineDash([10]);
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();

            }    
    }
    }
    //ctx.restore();
  window.addEventListener('resize', function(e){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
}

// END MOUSE TRAILS
