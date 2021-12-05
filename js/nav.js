const botonToggle = document.getElementById('boton_navbar');
const navLinks = Array.from(document.getElementsByClassName('menu_link'));
const bsCollapse =  new bootstrap.Collapse(botonToggle, { toggle: false });

navLinks.forEach((a) => {
   a.addEventListener('click', () => { bsCollapse.toggle()})
})
