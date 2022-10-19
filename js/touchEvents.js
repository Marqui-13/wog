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
