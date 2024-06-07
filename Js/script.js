document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addtareas();
});

let tareas = [];
function addtareas() {
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const priority = document.getElementById('priority').value;

    const product = {
        titulo,
        descripcion,
        expiryDate,
        priority
    };
    products.push(tareas);
    displaytareas();
    clearForm();
}