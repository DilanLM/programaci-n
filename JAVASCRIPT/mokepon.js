let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function inicioJuego() {
  let sectionSeleccionAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionAtaque.style.display = "none";

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "none";

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReinicio = document.getElementById("boton-reiniciar");
  botonReinicio.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  let sectionSeleccionMascota = document.getElementById("seleccionar-mascota");
  sectionSeleccionMascota.style.display = "none";

  let sectionSeleccionAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionAtaque.style.display = "block";

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "ratigueya";
  } else {
    alert("No has seleccionado a una mascota aún");
  }

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Él hipodoge";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Él capipepo";
  } else if (mascotaAleatoria == 3) {
    spanMascotaEnemigo.innerHTML = "La ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("Tú enemigo perdió 1 vida");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("Tú enemigo perdió 1 vida");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("Tú enemigo perdió 1 vida");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("Perdiste 1 vida");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  // Revisión de vidas

  revisarVidas();
}

function crearMensaje(resultadoBatalla) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");

  parrafo.innerHTML =
    "tu mascota atacó con " +
    ataqueJugador +
    ", la mascota del enemigo atacó con " +
    ataqueEnemigo +
    " | " +
    resultadoBatalla;

  sectionMensajes.appendChild(parrafo);
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! Ganaste el encuentro :D");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("Uyy... Perdiste el encuentro :(");
  }
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");

  parrafo.innerHTML = resultadoFinal;

  sectionMensajes.appendChild(parrafo);

  // Deshabilitando los botones de ataque
  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

window.addEventListener("load", inicioJuego);
