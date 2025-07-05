// Hamburger menu toggle
document.querySelector('.navbar_hamburger-wrap').addEventListener('click', () => {
  document.querySelector('.navbar_links').classList.toggle('open');
});

// Scroll-triggered fade-in animations
const fades = document.querySelectorAll('.fade-scroll');
const onScroll = () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
