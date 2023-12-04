let base = 500, aumento = 1;

function incremento (a, b) {
    base = a + b;
        if (base >= 700) { // parar el setinterval
            clearInterval(id);
        };
    return base; 
 };

const metal = document.querySelector("#recursoUno");
const id = setInterval(() => {
    metal.textContent = (incremento(base, aumento));
}, 1000);

const hora = document.querySelector("#horaActual");
setInterval(() => {
    hora.textContent = (new Date().toLocaleTimeString());
}, 1000);
