/* Info Fecha */

const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', {weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es', {month: 'short'});
    dateYear.textContent = date.toLocaleString('es', {year:'numeric'});
};

setDate();

/* Lista de Tareas */

window.addEventListener('load', () => {
    const formulario = document.querySelector('#formulario-nueva-tarea');
    const input = document.querySelector('#input-nueva-tarea');
    const elementoLista = document.querySelector('#tareas');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const tarea = input.value;

        if(!tarea) {
            alert("Por favor introduce una tarea");
            return;
        }

        const elementoTarea = document.createElement('div');
        elementoTarea.classList.add("tarea");

        const contenedorElementoTarea = document.createElement('div');
        contenedorElementoTarea.classList.add("contenedor");
        contenedorElementoTarea.innerText = tarea;

        elementoTarea.appendChild(contenedorElementoTarea);

        const inputElementoTarea = document.createElement("input");
        inputElementoTarea.classList.add("text");
        inputElementoTarea.type = "text";
        inputElementoTarea.value = tarea;
        inputElementoTarea.setAttribute("readonly", "readonly");

        contenedorElementoTarea.appendChild(inputElementoTarea);

        const controlesElementoTarea = document.createElement('div');
        controlesElementoTarea.classList.add('controles');

        const editarElementoTarea = document.createElement("button");
        editarElementoTarea.classList.add('editar');
        editarElementoTarea.innerHTML = "editar";

        const eliminarElementoTarea = document.createElement("button");
        eliminarElementoTarea.classList.add('eliminar');
        eliminarElementoTarea.innerHTML = "eliminar";

        controlesElementoTarea.appendChild(editarElementoTarea);
        controlesElementoTarea.appendChild(eliminarElementoTarea);

        elementoTarea.appendChild(controlesElementoTarea);

        elementoLista.appendChild(elementoTarea);

        input.value = "";

        editarElementoTarea.addEventListener('click', () => {
            if (editarElementoTarea.innerText.toLowerCase() == "editar") {
                inputElementoTarea.removeAttribute('readonly');
                inputElementoTarea.focus();
                editarElementoTarea.innerText = "Guardar";
            } else {
                inputElementoTarea.setAttribute('readonly', 'readonly');
                editarElementoTarea.innerText = "Editar";
            }
        });

        eliminarElementoTarea.addEventListener('click', () => {
            elementoLista.removeChild(elementoTarea);
        });
    });
});