
let numeroS=0;
let intentos=0 ;
let listaDeNumerosSecretos= [];
let numeroMaximodejuegos=10;

function asignatextoenelemento(elemento,texto){//permite otorgar valores con parametros valores en posiciones del HTML
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}
function verificarIntento(){
    let numeroUsuario= parseInt(document.getElementById (`numUs`).value);
    if (numeroS===numeroUsuario){//compara el acierto de los numeros 
        asignatextoenelemento(`p`,`Acertaste el número en ${intentos} ${(intentos===1)? "vez": "veces"}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else{ //se ejecuta si el numero no es el correcto
        if(numeroS>numeroUsuario)//permite saber si es mas grande o mas chico el numero como pista
        {            asignatextoenelemento(`p`,`El número es más grande`);}
        else {asignatextoenelemento(`p`,`El número es mas pequeño`);
    }
    intentos++;
    limpriar();
    }
}
function numeroSecreto() {//permite obtener un numero aleatorio en un rango definido
   let numeroGenerado = Math.floor(Math.random()*numeroMaximodejuegos)+1;
   console.log(numeroGenerado);
   console.log(listaDeNumerosSecretos);
if (listaDeNumerosSecretos.length==numeroMaximodejuegos) {
    asignatextoenelemento(`p`,`Has jugado con los ${numeroMaximodejuegos} números`);
} else {

   if (listaDeNumerosSecretos.includes(numeroGenerado)) {
    return numeroSecreto();
   } else {
    listaDeNumerosSecretos.push(numeroGenerado);
    return numeroGenerado;
   }
}
}
function limpriar() {//limpia el campo donde se anota el valor del intento
    document.getElementById(`numUs`).value= ``;
    
}

function condicionesIniciales() {
    asignatextoenelemento(`h1`,`Juego del número secreto`);
    asignatextoenelemento(`p`,`Indica un número del 1 al ${numeroMaximodejuegos}`);
    numeroS=numeroSecreto();
    intentos=1;
}
function reiniciarjuego() {
    condicionesIniciales();
    limpriar();
    document.getElementById("reiniciar").setAttribute("disabled","true");
    
}

condicionesIniciales()


