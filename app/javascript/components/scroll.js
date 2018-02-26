
window.__forceSmoothScrollPolyfill__ = true;
const links = document.querySelectorAll('.navbar-wagon-link');

// const sections = document.querySelectorAll('.section');
// sections.forEach(section => {
//   console.log()
//   console.log(section.getBoundingClientRect());
// });

function handleClick(event) {
  if (event.target.classList.contains('projet')) {
    document.querySelector('#projet').scrollIntoView({ behavior: "smooth"});
  } else if (event.target.classList.contains('service')) {
    document.querySelector('#service').scrollIntoView({ behavior: "smooth"});
  } else if (event.target.classList.contains('blog')) {
    document.querySelector('#blog').scrollIntoView({ behavior: "smooth" });
  }  else if (event.target.classList.contains('team')){
    document.querySelector('#team').scrollIntoView({ behavior: "smooth" });
  }
    else if (event.target.classList.contains('contact')) {
    document.querySelector('#contact').scrollIntoView({ behavior: "smooth", block: "start" });
  }
}




links.forEach(link => link.addEventListener('click', handleClick))


