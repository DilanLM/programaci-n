function aleatoria(min, max) {return Math.floor(Math.random() * (max - min + 1) + min) }

 function eleccion(jugada) {

    let resultado = ""

         if(jugada == 1 ) {

                resultado = "PIEDRA 🪨"

        }else if(jugada == 2) {

                 resultado = "PAPEL 🧻"

        }else if(jugada == 3) {

                 resultado = "TIJERAS ✂️"

         }else {

                  resultado = "NULO 🚫"
                }

            return resultado

    }

             
     let pc = 0

     let jugador = 0

     let victorias = 0

     let derrotas = 0


  while(victorias < 3 && derrotas < 3) {

    jugador =  prompt("Elige 1 para piedra 🪨, 2 para papel 🧻 y 3 para tijeras ✂️")

     pc = aleatoria(1,3)

     alert("Elegiste " + eleccion(jugador))
     alert("El PC eligió " + eleccion(pc))

        if(pc == jugador) {

             alert("EMPATE")

         }else if(jugador == 1 && pc == 3) {

             alert("GANASTE :D")

                 victorias = victorias + 1

        }else if(jugador == 2 && pc == 1) {

             alert("GANASTE :D")

                victorias = victorias + 1

         }else if(jugador == 3 && pc == 2) {

             alert("GANASTE :D")

                 victorias = victorias + 1

         }else {

             alert("PERDISTE 💀")

                derrotas = derrotas + 1

                }

     }
            

    alert("Ganaste " + victorias + " veces, y perdiste " + derrotas + " veces")
            
