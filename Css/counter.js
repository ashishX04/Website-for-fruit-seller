const counters = document.querySelectorAll('.value');
      const speed = 9000;

      counters.forEach( counter => {
      const animate = () => {
      const value = +counter.getAttribute('data');
      const data = +counter.innerText;
     
      const time = value / speed;
        if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
          }else{
          counter.innerText = value;
          }
     
        }
   
          animate();
        });