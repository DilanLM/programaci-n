function variables() {
  let variable1;
  var variable2;
  const constante = [];
}

function condicionales() {
  let numero = 3;
  let numero2 = 4;
  let suma = numero + numero2;

  if (suma < 8) {
    console.log("Esta mal pero no tanto el resultado");
  } else if (suma == 7) {
    console.log("Esta bien el resultado");
  } else {
    console.log("ahora si esta cule malo el resultado");
  }
}

function bucles() {
  // while
  for (let i = 0; i < 13; i++) {
    console.log(i);
  }
}

function funciones(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}

function arrays() {
  const array = [0, 1, 2, 3, 4];

  for (let i = 0; i <= 4; i++) {
    console.log("numero del indice" + i);
    let mostrar = array[i];
    console.log(mostrar);
  }
}

function objetos() {
  let persona = {
    nombre: "David",
    edad: 24,
    sexo: "masculino",
    pareja: true,
  };

  let persona2 = {
    nombre: "Daniela",
    edad: 27,
    sexo: "femenino",
    pareja: false,
  };

  return console.log((persona.talla = "Talla M"));
}
