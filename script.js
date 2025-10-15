const hamburger =
document.getElementById('hamburger');
const navList =
document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
      navList.classList.toggle('active');
     });


 const containers = document.querySelectorAll('.container');

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      containers.forEach(container => {
        const boxTop = container.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          container.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);    