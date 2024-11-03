// Seleccionamos todos los enlaces y secciones correspondientes
document.querySelectorAll("a").forEach((link, index) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace

        // Accedemos al div contenedor del enlace actual
        const section = link.parentElement.querySelector("p");

        // Verificamos si la sección está visible
        if (section.style.display === "none") {
            section.style.display = "block";      // Mostramos la sección
            link.textContent = "Ocultar contenidos"; // Cambiamos el texto a "Ocultar"
        } else {
            section.style.display = "none";       // Ocultamos la sección
            link.textContent = "Mostrar contenidos"; // Cambiamos el texto a "Mostrar"
        }
    });
});