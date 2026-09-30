let animacionIniciada = false;

function arrancar() {
    if (animacionIniciada) {
        return;
    }

    animacionIniciada = true;

    const inicio = document.getElementById("inicio");
    const auto = document.getElementById("auto");
    const carta = document.getElementById("carta");
    const boton = document.getElementById("botonArrancar");

    boton.disabled = true;
    boton.textContent = "En marcha...";

    auto.classList.add("moviendose");
    crearCorazones();

    setTimeout(function () {
        inicio.style.display = "none";
        carta.classList.add("visible");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 3000);
}

function crearCorazones() {
    const contenedor = document.getElementById("corazones");
    const cantidad = 55;

    for (let i = 0; i < cantidad; i++) {
        const corazon = document.createElement("div");

        corazon.className =
            i % 2 === 0
                ? "corazon rojo"
                : "corazon azul";

        // Se usa un carácter simple para evitar signos de interrogación.
        corazon.textContent = "♥";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.bottom =
            5 + Math.random() * 25 + "vh";

        corazon.style.animationDelay =
            Math.random() * 1.8 + "s";

        corazon.style.setProperty(
            "--direccion",
            Math.floor(Math.random() * 240) - 120
        );

        contenedor.appendChild(corazon);

        setTimeout(function () {
            corazon.remove();
        }, 5500);
    }
}