document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formContacto");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombreInput").value;
        alert("¡Muchas gracias por tu mensaje, " + nombre + "! Te contactaré muy pronto.");
        formulario.reset();
    });
});