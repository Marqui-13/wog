window.addEventListener("touchstart", event => {
                this.mouse.x = event.changedTouches[0].clientX;
                this.mouse.y = event.changedTouches[0].clientY;
            }, false);
            
            window.addEventListener("touchmove", event => {
                //event.preventDefault();
                this.mouse.x = event.targetTouches[0].clientX;
                this.mouse.y = event.targetTouches[0].clientY;
            }, false);
            
            window.addEventListener("touchend", event => {
                //event.preventDefault();
                this.mouse.x = 0;
                this.mouse.y = 0;
            }, false);
