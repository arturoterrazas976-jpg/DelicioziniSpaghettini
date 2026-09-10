// Esperamos a que todo el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const btnConsejo = document.getElementById("btn-consejo");
    const contenedor = document.querySelector(".contenedor");

    // Lista de consejos aleatorios del chef para el Spaghetti a la Bolognesa
    const consejos = [
        "💡 Consejo del Chef: Guarda media taza del agua de cocción de la pasta. Si la salsa te queda muy espesa, añade un poco de esta agua para integrarla perfectamente.",
        "💡 Consejo del Chef: No enjuagues la pasta después de colarla. El almidón superficial ayuda a que la salsa bolognesa se adhiera mucho mejor.",
        "💡 Consejo del Chef: Entre más tiempo dejes cocinar la salsa a fuego lento (incluso hasta 1 o 2 horas), más profundo e intenso será su sabor.",
        "💡 Consejo del Chef: Ralla el queso parmesano en el momento de servir; el sabor y aroma recién rallado superan por mucho al queso preempaquetado."
    ];

    btnConsejo.addEventListener("click", () => {
        // Verificamos si ya existe el recuadro del consejo para no duplicarlo
        let cajaExistente = document.querySelector(".caja-consejo");

        // Seleccionamos un consejo al azar
        const consejoAleatorio = consejos[Math.floor(Math.random() * consejos.length)];

        if (!cajaExistente) {
            // Creamos un nuevo elemento si no existe
            const nuevaCaja = document.createElement("div");
            nuevaCaja.className = "caja-consejo";
            nuevaCaja.textContent = consejoAleatorio;
            contenedor.appendChild(nuevaCaja);
        } else {
            // Si ya existe, simplemente actualizamos el texto
            cajaExistente.textContent = consejoAleatorio;
        }
    });
});