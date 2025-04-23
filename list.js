const formulario = document.getElementById('form-tarea');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    //Traigo el valor de la tarea al agregar
    const titulo = document.getElementById('nombreTarea').value;
    const descripcionTarea = document.getElementById('descripcion').value;
    const categoria = document.getElementById('categoriaTarea').value;
    //Creo una nueva tarea dentro de una categoria
    const nuevaTarea = document.createElement('div');
    nuevaTarea.classList.add('tarea', categoria);
    nuevaTarea.innerHTML = `
    <h3>${titulo}</h3>
    <p>${descripcionTarea}</p>
    `;
    if (categoria === document.getElementById('urgente')) {
        document.getElementById('urgente').appendChild(nuevaTarea);
    }
    else if (categoria === document.getElementById('pendiente')){
        document.getElementById('pendiente').appendChild(nuevaTarea);
    }
    else if (categoria === document.getElementById('progreso')){
        document.getElementById('progreso').appendChild(nuevaTarea);
    }
    else{
        document.getElementById('completado').appendChild(nuevaTarea);
    } 
    
    //limpio el formulario
    formulario.reset();
})