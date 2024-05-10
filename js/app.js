const personas = [
    new Persona('Raul', 'Llamosas')
];

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
};

function agregarPersonas(){

    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const persona = new Persona(nombre.value, apellido.value);
    personas.push(persona);
    mostrarPersonas();
};