function arrancar() {
    const inicio = document.getElementById("inicio");
    const auto = document.getElementById("auto");
    const carta = document.getElementById("carta");

    auto.classList.add("moviendose");

    crearCorazones();

    setTimeout(function () {
        inicio.style.display = "none";
        carta.classList.add("visible");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 1800);
}

function crearCorazones() {
    const contenedor = document.getElementById("corazones");
    const cantidad = 45;

    for (let i = 0; i < cantidad; i++) {
        const corazon = document.createElement("div");

        corazon.className = "corazon";
        corazon.textContent = i % 2 === 0 ? "??" : "??";

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.bottom = 5 + Math.random() * 25 + "vh";
        corazon.style.animationDelay = Math.random() * 1.8 + "s";
        corazon.style.setProperty(
            "--direccion",
            Math.floor(Math.random() * 240) - 120
        );

        contenedor.appendChild(corazon);

        setTimeout(function() {
            corazon.remove();
        }, 5500);
    }
}