function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona"
    // de la forma:
        // {
        //  nombre: 'Lionel',
        //  apellido: 'Messi',
        //  invitado: true
        //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido"
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi"
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista"
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta"
    // Tu código:
    const nombre = 'Lionel';
    const apellido = 'Messi';
    const invitado = true
    if(nombre === true && apellido === true && invitado ===true) {
        return nombre + apellido + " un gusto tenerlo nuevamente! Bienvenido";
    } else if(nombre === false && apellido === true && invitado ===true) {
        return "Bienvenido Sr. " + apellido;
    } else if(nombre === true && apellido === false && invitado ===true) {
        return "Hola " + nombre + ", tu mesa esta lista"
    } else if(invitado === false) {
        return "Disculpe señor, no esta invitado a la fiesta"
    } 
}