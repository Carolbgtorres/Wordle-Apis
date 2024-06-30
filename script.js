let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH','PADEL']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
let intentos = 6;
let h1 = document.getElementById("titulo"); 

h1.style.color = "black"
let button = document.getElementById ("guess-button");
console.log(button);

button.addEventListener ("click", intentar);
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!</h1>")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter'; 
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
		intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!</h1>")
    }
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
    setTimeout(reiniciarJuego, 5000);  // 5 segundos para volver a intentar
}
function reiniciarJuego(){
    palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
    intentos = 6;
    document.getElementById("guess-input").disabled = false;
    document.getElementById("guess-input").value = '';
    button.disabled = false;
    document.getElementById('guesses').innerHTML = '';
    document.getElementById("grid").innerHTML = '';
}