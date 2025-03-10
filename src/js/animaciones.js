document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("pasarela_1");

    if (!wrapper) {
        console.error("Elemento con ID 'pasarela_1' no encontrado.");
        return;
    }

    // Duplicar el contenido hasta que supere el doble del ancho del viewport
    let wrapperWidth = wrapper.scrollWidth;
    const viewportWidth = window.innerWidth;

    while (wrapperWidth < viewportWidth * 2) {
        wrapper.innerHTML += wrapper.innerHTML; // Duplica el contenido
        wrapperWidth = wrapper.scrollWidth; // Vuelve a calcular el ancho
    }

    // Aplicar la animación infinita
    anime({
        targets: "#pasarela_1",
        translateX: ["0%", "-100%"], // Mueve completamente el grupo de textos
        duration: 100000,
        easing: "linear",
        loop: true
    });
});