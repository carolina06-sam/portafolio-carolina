const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navInicio = document.querySelectorAll(".nav-menu-item");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    /* cuando se le hace click en el menu lo cierra o lo abre */

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    /* cuando se le hace click en el menu lo cierra o lo abre */
});

/* toggle si esta la clase la elimina y si no esta la añade cuando se realize el evento click a toggles (icono hamgurguesa) le va añadir o quitar la clase nav menu_viible a nav menu */
/* cuando nav class active esta se muestra el menu */
/* contains para valores Boolean */
/* es los condicionales si nav menu tiene la clase nav-menu_visible el arial label dira cerrar en caso contrario le dira abrir
 */
/*  lo que hace setatribute es cambiar la constante luego recibe dos valores el primero es el atributo que quiero cambiar y el segundo el valor de ese elemento */
