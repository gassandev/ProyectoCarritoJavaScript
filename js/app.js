// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListener();
function cargarEventListener() {
    //Cuando agregar un curso presinando 'Agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);
}



//Funciones

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;



        leeDatosCurso(cursoSeleccionado);
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso

function leeDatosCurso(curso) {
    // console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);
}



// Muestra el carrito de compras en el HTML

function carritoHTML() {

    articulosCarrito.forEach( (curso) => {
        const row = document.createElement('tr');
        row.innerHTML = '
            <td>
            
            </td>
        ';
    })
}