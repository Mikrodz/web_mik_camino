
 //$(function () {
            //$('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
                    //$('.navbar-toggle:visible').click();
            //});
    //});

//const navLinks = document.querySelectorAll('.nav-item');
//const menuToggle = document.getElementById('boton_navbar');
//const bsCollapse =  new bootstrap.Collapse(menuToggle, {
   //toggle: false
//});

//navLinks.forEach((l) => {
   //l.addEventListener('click', () => { bsCollapse.toggle()})
//})


const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('boton_navbar');
const nuevoCollapse =  Collapse(menuToggle, {
   toggle: false
});

navLinks.forEach((a) => {
   a.addEventListener('click', () => { nuevoCollapse.toggle()})
})
