const inicio = document.getElementById("inicio");
const pagina = document.getElementById("pagina");
const auto = document.getElementById("auto");
const humoRojo = document.getElementById("humoRojo");
const humoAzul = document.getElementById("humoAzul");
const carta = document.getElementById("carta");

let iniciado = false;

function comenzar() {
  if (iniciado) {
    return;
  }

  iniciado = true;

  inicio.classList.add("oculto");
  pagina.classList.add("visible");

  setTimeout(function() {
    auto.classList.add("arrancando");
    humoRojo.classList.add("activo");
    humoAzul.classList.add("activo");
  }, 700);

  setTimeout(function() {
    carta.classList.add("visible");
  }, 5600);
}

document.addEventListener("click", comenzar);
document.addEventListener("touchstart", comenzar);