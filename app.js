//let numeroSecreto = generarNumeroSecreto(); //Variable de alcance global
let numeroSecreto;
let intentos = 1; //Declaramos la variable intentos y se inicializa en 1 
let listaNumerosSorteados = []; //Almacena los numeros si fue sorteado
let numeroMaximo = 10;
//Aqui lo que se hizo fue eliminar la declaracion de variables 
//Se creo una funcion y se invoca en una funcion ambas, la del h1 y la de p  
function asignarTextoElemento(elemento, texto) { //Elemento es h1 y P y texto es lo que se escribe
let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return; //Se coloca que una funcion retorna una cosa en la mayoria de veces
    }
//Funcion valida el intento del usuario // Las llaves enacapsulan toda esa acción
function verificarIntento() { // Aqui creamos la funcion que se ejecuta en html, encapasulamos una acion que queremos que haga
    //El parseint obliga a que sea un tipo de dato entero
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //ElgetByid es para obtener valor de un id especifico
    console.log(typeof(numeroDeUsuario)); //Nos ayuda a verificar el tipo de value en este caso string
    console.log(numeroSecreto); //Muestra num secret en consola
    console.log(typeof(numeroSecreto)); //Devuelve el tipo de dato de lo que ingresamos en el input
    console.log(numeroDeUsuario); //Probar si lee el numero
    
    if (numeroDeUsuario === numeroSecreto) { // Evalua si el numero que digitamos es igual al random
        asignarTextoElemento('p',`Acertaste el numero correcto en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`); //Aparecera el mensaje arriba de la etiqueta blanca y usamos el operador ternario para vez o veces
        document.getElementById('reiniciar').removeAttribute('disabled'); //aqui activamos el boton de nuevo juego, removemos el atributo disabled de html 
    } else {
        //El usuario no ha acertado
        if (numeroDeUsuario > numeroSecreto) {  // Evalua si es mayor 
            asignarTextoElemento('p','El numero secreto es menor'); 
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++; //Aqui va contando los intentos
        limpiarCaja();  //Llamamos la funcion que limpia la caja
    }
    return; //Retornamos la funcion 
}

function limpiarCaja() {  //Funcion que limpia el campo 
    document.querySelector('#valorUsuario').value = ''; //Capturamos el valor del id del input de html 
    // ' '; Vacio aqui limpia la caja
    
}
function generarNumeroSecreto () { 

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1 //Realiza numero random a 10 sin decimales el +1 es para que comience desde 1 y no de 0
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else { 

    

    //Nos devuelve el numero secreto
    //Si el numero generado esta incluido en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)) { //Includes revisa si ya existe en la lista ese valor
        return generarNumeroSecreto();  
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;   
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`Indica el numero del 1 al ${numeroMaximo}`);   //Usamos operador ternario en vez de 10
    numeroSecreto = generarNumeroSecreto(); //Se queda asi pq se asigna una variable y se invoca nuevamente en la funcion
    intentos = 1;
}

function reiniciarJuego() { //Hace que limpie la caja 
    limpiarCaja();
//Indicar mensaje de intervalo de numero 
//Generar el numero aleatorio
//Inicializar el numero de intentos
    condicionesIniciales();

//Deshabilitar el boton de nuevo juego 
document.querySelector('#reiniciar').setAttribute('disabled','true');


}
condicionesIniciales();  //Se asgina fuera de la funcion

//Se asgina el texto fuera de la función
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p','Indica el numero del 1 al 10');