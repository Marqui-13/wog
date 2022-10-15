// START INTERSECTION OBSERVER
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  const hiddenElements2 = document.querySelectorAll('.hidden2');
  const hiddenElements3 = document.querySelectorAll('.hidden3');
  const hiddenElements4 = document.querySelectorAll('.hiddenAlt');
  hiddenElements.forEach((el) => observer.observe(el)); 
  hiddenElements2.forEach((el) => observer.observe(el));
  hiddenElements3.forEach((el) => observer.observe(el));
  hiddenElements4.forEach((el) => observer.observe(el));

// END INTERSECTION OBSERVER
