/*Curso JavaScript aprenderaprogramar.com */
var editando = false;
function transformarEnEditable(nodo) {
    //El nodo recibido es SPAN
    if (editando == false) {
        var nodoTd = nodo.parentNode; //Nodo TD
        var nodoTr = nodoTd.parentNode; //Nodo TR
        var nodoContenedorForm = document.getElementById('contenedorForm'); //Nodo DIV
        var nodosEnTr = nodoTr.getElementsByTagName('td');
        var alimento = nodosEnTr[0].textContent; 
        var calorias = nodosEnTr[1].textContent;
        var grasas = nodosEnTr[2].textContent; 
        var proteina = nodosEnTr[3].textContent;
        var carbohidratos = nodosEnTr[4].textContent;
        var nuevoCodigoHtml = `
        <td><input type="text" name="alimento" id="alimento" value="${alimento}" size="10" class="form-control"></td>
        <td><input type="text" name="calorias" id="calorias" value="${calorias}"  size="5" class="form-control"></td>
        <td><input type="text" name="grasas" id="grasas" value="${grasas}"  size="5" class="form-control" ></td>
        <td><input type="text" name="proteina" id="proteina" value="${proteina}"  size="5" class="form-control"></td>
        <td><input type="text" name="carbohidratos" id="carbohidratos" value="${carbohidratos}" size="5" class="form-control"></td>
        <td><select name="Ok" id="Ok" class="form-control">
            <option name="Feliz" id="Feliz" value="Feliz" class="btn btn-secondary">Bien</option> 
            <option name="Triste" id="Triste" value="Triste" class="btn btn-secondary">Mal</option>
        </select>
        </td>
        <td>En edición</td>
        `;
        nodoTr.innerHTML = nuevoCodigoHtml;
        nodoContenedorForm.innerHTML = `Pulse Aceptar para guardar los cambios o cancelar para anularlos
        <form name = "formulario" action="Tabla.html" method="get" onsubmit="capturarEnvio()"onreset="anular()">  
        <input class="boton" type = "submit" value="Aceptar">
        <input class="boton" type="reset" value="Cancelar">`;
        editando = "true";
    }
    else {
        alert('Solo se puede editar una línea. Recargue la página para poder editar otra');
    }
}


function capturarEnvio() {
    var nodoContenedorForm = document.getElementById('contenedorForm'); 
    nodoContenedorForm.innerHTML = `
    Pulse Aceptar para guardar los cambios o cancelar para anularlos
    <form name = "formulario" action="Tabla.html" method="get" onsubmit="capturarEnvio()"onreset="anular()">    
    <input type="hidden" name="alimento" value="${document.querySelector('#alimento').value}">
    <input type="hidden" name="calorias" value="${document.querySelector('#calorias').value}">
    <input type="hidden" name="grasas" value="${document.querySelector('#grasas').value}">
    <input type="hidden" name="proteina" value="${document.querySelector('#proteina').value}">
    <input type="hidden" name="carbohidratos" value="${document.querySelector('#carbohidratos').value}">
    <input type="hidden" name="Ok" value="${document.querySelector('#Ok').value}">
    <input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">`
    document.formulario.submit();
}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



function Datos(){
    console.log('Su madre');
    let tabla = document.getElementById('nana');
    var alimento = getParameterByName('alimento');
    var calorias = getParameterByName('calorias');
    var proteina = getParameterByName('proteina');
    var carb = getParameterByName('carbohidratos');
    var grasas = getParameterByName('grasas');
    var Ok = getParameterByName('Ok');
    console.log(alimento);
    tabla.innerHTML = `
    <br>
    <br>
    <div class="card mb-3">
            <h3 class="card-header" style="text-align: center;">Carta Nutricional</h3>
            <div class="contenedor">
                <img src="${Ok}.png" width="100">
                <h4 >Alimento: <br>
                    <h4>${alimento}</h4>
                </h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Calorias (kCal) <span class="badge badge-primary" style="position: absolute;left: 80%;">${calorias}</span>
                </li>
                <li class="list-group-item">Grasas (g) <span class="badge badge-secondary" style="position: absolute;left: 80%;">${grasas}</span>
                </li>
                <li class="list-group-item">Proteina (g)<span class="badge badge-success" style="position: absolute;left: 80%;">${proteina}</span>
                </li>
                <li class="list-group-item">Carbohidratos (g) <span class="badge badge-danger" style="position: absolute;left: 80%;">${carb}</span>
                </li>
            </ul>
        </div>`;

}

function anular() {
    window.location.reload();
}
