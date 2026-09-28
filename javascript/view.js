// =========================
// VIEW
// =========================


// Elementos del HTML
const listaSonetos = document.querySelector('#listaSonetos');

const nombreSoneto = document.querySelector('#nombreSoneto');
const tituloSoneto = document.querySelector('#tituloSoneto');
const autorSoneto = document.querySelector('#autorSoneto');
const poema = document.querySelector('#poema');


// Muestra la lista de sonetos en el aside
export function mostrarListaSonetos(sonetos) {

    listaSonetos.replaceChildren();

    sonetos.forEach(function(soneto) {

        const enlace = document.createElement('a');

        enlace.href = '#';

        enlace.textContent = soneto.nombre;

        enlace.dataset.id = soneto.id;

        listaSonetos.appendChild(enlace);

    });

}


// Muestra el soneto seleccionado
export function mostrarSoneto(soneto) {

    nombreSoneto.textContent = soneto.nombre;

    tituloSoneto.textContent =
        `Título: "${soneto.titulo}"`;

    autorSoneto.textContent =
        `Autor: "${soneto.autor}"`;


    // Eliminamos el poema anterior
    poema.replaceChildren();


    // Creamos las estrofas
    soneto.estrofas.forEach(function(estrofa) {

        const parrafo = document.createElement('p');


        estrofa.forEach(function(verso, posicion) {

            const textoVerso = document.createTextNode(verso);

            parrafo.appendChild(textoVerso);


            // Añadimos salto de línea salvo en el último verso
            if (posicion < estrofa.length - 1) {

                parrafo.appendChild(
                    document.createElement('br')
                );

            }

        });


        poema.appendChild(parrafo);

    });

}