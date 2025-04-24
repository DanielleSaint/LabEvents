const botonAgregar = document.getElementById('botonTarea')

botonAgregar.addEventListener('click', function (e) {
    e.preventDefault();
    //Traigo el valor de la tarea al agregar
    const titulo = document.getElementById('nombreTarea').value.trim();
    const descripcionTarea = document.getElementById('descripcion').value.trim();
    if (!titulo || !descripcionTarea) {
        alert("Por favor, completa todos los campos.");
        return;
    }
    //Creo una nueva lista
    const nuevaLista = document.createElement('li');
    nuevaLista.className = 'listaToDo';
    nuevaLista.innerHTML = `
        <div>
            <img src="./img/pngtree-purple-round-border-image_2231965-removebg-preview.png">
            <div>
                <h2>${titulo}</h2>
                <p>${descripcionTarea}</p>
            </div>
            <button type=submit id="eliminar">Eliminar</button>
        </div>
    `;
    //agregar nueva lista al listado
    document.getElementById("listado").appendChild(nuevaLista);
});