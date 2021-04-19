var jugador1 = prompt('Inserta tu nombre Jugador 1: ');
var marcador1 = 0, marcador2 = 0;
//Actualizar marcador con el Nombre del jugador1
setTimeout(Marcador, 200);

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  //Función para actualizar marcador
  function Marcador() {
    document.getElementById('jugador1').innerHTML = 'Jugador 1: ' + jugador1;
    document.getElementById('marcador1').innerHTML = 'Marcador: ' + marcador1;
    document.getElementById('marcador2').innerHTML = 'Marcador: ' + marcador2;
}

function RespuestaUsuario(num){

    var random = numeroAleatorio(0,2);
    var array = ['piedra', 'papel', 'tijeras'];
    var respuestaIA = array[random];

    if (num == 0){
        if(respuestaIA == 'piedra'){
            document.getElementById('respuesta').innerHTML = 'EMPATE, IA eligió Piedra';
            document.getElementById('respuesta').style.color = 'orange';
            
        }
        else if (respuestaIA == 'papel'){
            document.getElementById('respuesta').innerHTML = 'PERDISTE, IA eligió Papel';
            document.getElementById('respuesta').style.color = 'red';
            marcador2++;
        }
        else{
            document.getElementById('respuesta').innerHTML = 'GANASTE, IA eligió Tijeras';
            document.getElementById('respuesta').style.color = 'green';
            marcador1++;
        }
        
        Marcador();
    }

    if (num == 1){
        if(respuestaIA == 'piedra'){
            document.getElementById('respuesta').innerHTML = 'GANASTE, IA eligió Piedra';
            document.getElementById('respuesta').style.color = 'green';
            marcador1++;
        }
        else if (respuestaIA == 'papel'){
            document.getElementById('respuesta').innerHTML = 'EMPATE, IA eligió Papel';
            document.getElementById('respuesta').style.color = 'orange';
        }
        else{
            document.getElementById('respuesta').innerHTML = 'PERDISTE, IA eligió Tijeras';
            document.getElementById('respuesta').style.color = 'red';
        marcador2++;
        }

        Marcador()
    }

    if (num == 2){
        if(respuestaIA == 'piedra'){
            document.getElementById('respuesta').innerHTML = 'PERDISTE, IA eligió Piedra';
            document.getElementById('respuesta').style.color = 'red';
            marcador1++;
        }
        else if (respuestaIA == 'papel'){
            document.getElementById('respuesta').innerHTML = 'GANASTE, IA eligió Papel';
            document.getElementById('respuesta').style.color = 'green';
        }
        else{
            document.getElementById('respuesta').innerHTML = 'EMPATE, IA eligió Tijeras';
            document.getElementById('respuesta').style.color = 'orange';
            marcador2++;
        }

       Marcador();
    }
}




