//contact-list
const listaContactos = [
    "Danna Cortes",
    "John Castro",
    "Maria Donado",
    "Luis Lombo"
];

function añadirContacto(nombreApellido) {
    listaContactos.push(nombreApellido);
}

añadirContacto("Jean Figueroa");
function borrarContacto(nombreApellido) {
    const indice = listaContactos.indexOf(nombreApellido);
    if (indice > -1) {
        listaContactos.splice(indice, 1);
    }
}

borrarContacto("Maria Donado");
function imprimirContactos() {
    console.log("Lista de contactos:");
    listaContactos.forEach(contacto => console.log(contacto));
}

imprimirContactos();