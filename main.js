// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)



window.addEventListener('scroll',function(){
    var navbar = document.querySelector('#navbar');
    navbar.classList.toggle('logo',window.scrollY>0);
})
