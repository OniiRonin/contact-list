const listaContactos = [
    {
        id: 1,
        nombres: "Danna",
        apellidos: "Cortes",
        telefono: "3152323852",
        ubicaciones: [
            {
                ciudad: "Bogota",
                direccion: "Av. Caracas No. 34 - 21"
            }
        ]
    },

    {
        id: 2,
        nombres: "John",
        apellidos: "Castro",
        telefono: "3105858369",
        ubicaciones: [
            {
                ciudad: "Cartagena",
                direccion: "Cll 8 No. 23 -10"
            }

        ]
    }
];

function añadirContacto(contacto) {
    listaContactos.push(contacto);
}

añadirContacto({
    id: 3,
    nombres: "Juan",
    apellidos: "Gomez",
    telefono: "3118585789",
    ubicaciones: [
        {
            ciudad: "Ibague",
            direccion: "Av. 3ra No. 47 - 03"
        }
    ]
});

function borrarContacto(id) {
    const indice = listaContactos.findIndex(contacto => contacto.id === id);
    if (indice > -1) {
        listaContactos.splice(indice, 1);
    }
}

borrarContacto(2);
function imprimirContactos() {
    console.log("Lista de contactos:");
    listaContactos.forEach(contacto => console.log(contacto));
}

imprimirContactos();