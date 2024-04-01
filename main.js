window.addEventListener('scroll',function(){
    var navbar = document.querySelector('#navbar');
    navbar.classList.toggle('logo',window.scrollY>0);
})
