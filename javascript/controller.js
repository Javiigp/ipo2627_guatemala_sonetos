
import {
    obtenerSonetos,
    obtenerSonetoPorId
} from './model.js';


import {
    mostrarListaSonetos,
    mostrarSoneto
} from './view.js';



// Obtenemos todos los sonetos del Model
const sonetos = obtenerSonetos();


// La View crea el menú lateral
mostrarListaSonetos(sonetos);


// Mostramos inicialmente el primer soneto
mostrarSoneto(sonetos[0]);


const listaSonetos = document.querySelector('#listaSonetos');


listaSonetos.addEventListener('click', function(event) {

    // Comprobamos si se ha pulsado un enlace
    const enlace = event.target.closest('a');

    if (!enlace) {
        return;
    }


    // Evitamos que el navegador siga el href="#"
    event.preventDefault();


    // Obtenemos el id guardado en data-id
    const id = Number(enlace.dataset.id);


    // Pedimos el soneto al Model
    const soneto = obtenerSonetoPorId(id);


    // La View muestra el soneto
    mostrarSoneto(soneto);

});


const boton = document.querySelector('.boton');

const darkTheme = document.querySelector('#darkTheme');


// Comprobamos el tema guardado
const temaGuardado = localStorage.getItem('tema');


if (temaGuardado === 'oscuro') {

    darkTheme.disabled = false;

} else {

    darkTheme.disabled = true;

}




boton.addEventListener('click', function() {

    // Cambiamos el estado de dark.css
    darkTheme.disabled = !darkTheme.disabled;


    // Guardamos la elección
    if (darkTheme.disabled) {

        localStorage.setItem('tema', 'claro');

    } else {

        localStorage.setItem('tema', 'oscuro');

    }

});