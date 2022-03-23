function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona"
    // de la forma:
        // {
        //  nombre: 'Travis',
        //  apellido: 'Morgan',
        //  invitado: true
        //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Travis Morgan, un gusto tenerlo nuevamente! Bienvenido"
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Morgan"
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Travis, tu mesa está lista"
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta"
    // Tu código:
    const nombre = 'Travis';
    const apellido = 'Morgan';
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