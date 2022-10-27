
//  START TEXT REVEAL EFFECT

let h1Elements = [];
let h2Elements = [];
let h3Elements = [];
const h1Array = [...document.querySelectorAll('p')];
const h2Array = [...document.querySelectorAll('p')];
const h3Array = [...document.querySelectorAll('p')];
const specialChars = [...'!@£$%&}{":;?><][+=-_qwertyuiopasdfghjklzxcvbnm'.split('')]

class Title{
    constructor(id, element){
        this.id = id;
        this.idx = 0;
        this.frame = 0;
        this.element = element;
        this.element.className = `${id}`;
        this.originalString = element.innerText;
        this.innerHtml = '';
        this.intersecting = false;
        this.createSpans();
    }

    createSpans(){
        for(let i = 0; i < this.originalString.length; i++){
            this.innerHtml += `<span>${this.originalString[i]}</span>`;
        }
        this.element.innerHTML = this.innerHtml;
        this.spans = [...this.element.querySelectorAll('span')]
    
    }

    animate(){
        if(this.idx !== this.originalString.length && this.intersecting){
            this.spans[this.idx].style.opacity = 1;
            this.spans[this.idx].style.transform = `translateX(0)`
            if(this.frame % 10 === 0 && this.spans[this.idx].innerText !== ' '){
                this.spans[this.idx].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            }
            if(this.frame % 20 == 0 && this.frame !== 0){ // Tweak the frame % number to adjust animation time
                this.spans[this.idx].innerText = this.originalString[this.idx]
                this.idx++
            }
            this.frame++;
            requestAnimationFrame(this.animate.bind(this))
        }else{
            console.log('done')
        }
    }

    reset(){
        this.idx = 0;
        this.frame = 0;
        this.intersecting = false;
        [...this.element.querySelectorAll('span')].forEach(span => {
            span.style.opacity = 0;
            span.style.transform = `translateX(-10px)`
        })
    }
}

window.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        h1Array.forEach((header,idx) => {
            h1Elements[idx] = new Title(idx, header)
        })

        h2Array.forEach((header,idx) => {
            h2Elements[idx] = new Title(idx, header)
        })

        h3Array.forEach((header,idx) => {
            h3Elements[idx] = new Title(idx, header)
        })
    
        let options = {
            rootMargin: '0px',
            threshold: 0.0
          }
          
          let callback = (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    h1Elements[entry.target.className].intersecting = true;
                    h1Elements[entry.target.className].animate()

                    h2Elements[entry.target.className].intersecting = true;
                    h2Elements[entry.target.className].animate()

                    h3Elements[entry.target.className].intersecting = true;
                    h3Elements[entry.target.className].animate()
                  
                }
            });
          };
        
          let observer = new IntersectionObserver(callback, options);
    
          h1Elements.forEach(instance => {
            observer.observe(instance.element)
            instance.element.style.opacity = 1
          });

          h2Elements.forEach(instance => {
            observer.observe(instance.element)
            instance.element.style.opacity = 1
          });

          h3Elements.forEach(instance => {
            observer.observe(instance.element)
            instance.element.style.opacity = 1
          });

    }, 300)
})


//  END TEXT REVEAL EFFECT
