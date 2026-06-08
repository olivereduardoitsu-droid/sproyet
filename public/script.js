// En tu archivo script.js (dentro de la carpeta public)
async function crearTarea() {
    const datos = {
        titulo: document.getElementById('titulo').value,
        descripcion: document.getElementById('descripcion').value,
        proyecto_id: 1 // Este ID vendría de tu sistema
    };

    const response = await fetch('/agregar-tarea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });
    const resultado = await response.json();
    alert(resultado.mensaje);
}
