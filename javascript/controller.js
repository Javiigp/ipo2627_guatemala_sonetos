
import {
    obtenerSonetos,
    obtenerSonetoPorId
} from './model.js';


import {
    mostrarListaSonetos,
    mostrarSoneto
} from './view.js';

const sonetos = obtenerSonetos();


mostrarListaSonetos(sonetos);


mostrarSoneto(sonetos[0]);


const listaSonetos = document.querySelector('#listaSonetos');


listaSonetos.addEventListener('click', function(event) {

    
    const enlace = event.target.closest('a');

    if (!enlace) {
        return;
    }


    event.preventDefault();

    const id = Number(enlace.dataset.id);

    const soneto = obtenerSonetoPorId(id);

    mostrarSoneto(soneto);

});


const boton = document.querySelector('.boton');

const darkTheme = document.querySelector('#darkTheme');


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