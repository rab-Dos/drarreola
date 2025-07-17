const topButton = document.getElementById("topButton")

window.addEventListener("scroll", () => {
if (window.scrollY > 20) {
    topButton.classList.remove("opacity-0", "pointer-events-none")
    topButton.classList.add("opacity-100")
} else {
    topButton.classList.remove("opacity-100")
    topButton.classList.add("opacity-0", "pointer-events-none")
}
})

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
})

function actualizarAnioActual() {
    const spanAnio = document.getElementById('anio')
    if (spanAnio) {
        spanAnio.textContent = new Date().getFullYear()
    }
}

actualizarAnioActual()

let colorbg = new Color4Bg.BlurGradientBg({
    dom: "box",
    colors: ["#4098DB","#ECF3FC","#C1EBFB","#A9E0F8"],
    loop: true
})

let colorbg2 = new Color4Bg.BlurGradientBg({
    dom: "box2",
    colors: ["#e7e7e7","#ffffff","#dadada","#cdcdcd"],
    loop: true
})

let colorbg3 = new Color4Bg.BlurGradientBg({
    dom: "box3",
    colors: ["#e7e7e7","#ffffff","#dadada","#cdcdcd"],
    loop: true
})