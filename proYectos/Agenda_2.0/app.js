const nueva = document.querySelector("#btnNueva");
const insertarTr = document.querySelector("#tabla");



nueva.addEventListener("click", function(){
    let trLinea = document.createElement("tr");
    let tdCampoId = document.createElement("td");
    let tdCampoNombre = document.createElement("td");
    let tdCampoFechaFin = document.createElement("td");

    let tdTexto = document.createTextNode("003");
    tdCampoId.appendChild(tdTexto);
    trLinea.appendChild(tdCampoId);

    tdTexto = document.createTextNode("Nueva tarea 3");
    tdCampoNombre.appendChild(tdTexto);
    trLinea.appendChild(tdCampoNombre);

    tdTexto = document.createTextNode("24/04/2024");
    tdCampoFechaFin.appendChild(tdTexto);
    trLinea.appendChild(tdCampoFechaFin);

    insertarTr.appendChild(trLinea);
});

eliminar.addEventListener("click", (e)=>{

});