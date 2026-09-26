const boton = document.querySelector('.boton');
const darkTheme = document.querySelector('#darkTheme');



const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'oscuro') {
    darkTheme.disabled = false;
} else {
    darkTheme.disabled = true;
}



boton.addEventListener('click', function () {

    darkTheme.disabled = !darkTheme.disabled;

    if (darkTheme.disabled) {
        localStorage.setItem('tema', 'claro');
    } else {
        localStorage.setItem('tema', 'oscuro');
    }

});