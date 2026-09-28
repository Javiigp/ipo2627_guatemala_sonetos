const listaSonetos = document.querySelector('#listaSonetos');

const nombreSoneto = document.querySelector('#nombreSoneto');
const tituloSoneto = document.querySelector('#tituloSoneto');
const autorSoneto = document.querySelector('#autorSoneto');
const poema = document.querySelector('#poema');


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


export function mostrarSoneto(soneto) {

    nombreSoneto.textContent = soneto.nombre;

    tituloSoneto.textContent =
        `Título: "${soneto.titulo}"`;

    autorSoneto.textContent =
        `Autor: "${soneto.autor}"`;


    
    poema.replaceChildren();


    
    soneto.estrofas.forEach(function(estrofa) {

        const parrafo = document.createElement('p');


        estrofa.forEach(function(verso, posicion) {

            const textoVerso = document.createTextNode(verso);

            parrafo.appendChild(textoVerso);


            
            if (posicion < estrofa.length - 1) {

                parrafo.appendChild(
                    document.createElement('br')
                );

            }

        });


        poema.appendChild(parrafo);

    });

}