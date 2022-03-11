// No cambies los nombres de las funciones.

const { stringify } = require("git-url-parse");

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `constructor`, define el usuario, el nombre, el email y la contraseña
  // El `constructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Escribe tu código aquí:
  function Usuario(opciones) {
    this.usuario = opciones.usuario
    this.nombre = opciones.nombre
    this.email = opciones.email
    this.password = opciones.password
  }
  Usuario.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  }; return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Escribe tu código aquí:
  Constructor.prototype.saludar = function() {
    return "Hello World!";
  };
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  // Escribe tu código aquí:
  String.prototype.reverse = function() {
    var stringInvertida = '';
    for(var i = this.length -1; i >= 0; i--) {
      stringInvertida = stringInvertida + this.charAt(i);
    } return stringInvertida;
  };
}

// ---------------------------------------------------------------------------//
  // Crea el constructor de la clase "Persona"
  // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  // Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores
    // Ej: {
    //  Nombre: 'Sherley',
    //  Apellido: 'Banks',
    //  Edad: 35,
    //  Domicilio: 'Aragon 541'
    //  }

class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    // Escribe tu código aquí:
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.domicilio = domicilio
    this.detalle = function() {
      return {
        Nombre: this.nombre,
        Apellido: this.apellido,
        Edad: this.edad,
        Domicilio: this.domicilio
      }
    }
  }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  // Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  // Recibirá los valores "Sherley", "Banks", 35, "Aragon 541" para sus respectivas propiedades
  // Devolver la nueva persona creada
  // Escribe tu código aquí:
  const persona = new Persona(nombre, apellido, edad, dir);
  return persona;
}
  
function agregarMetodo() {
  // La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve:
  // Ej: "Sherley, 35 años"
  // Escribe tu código aquí:
  Persona.prototype.datos = function() {
    return this.nombre + ", " + this.edad + " años";
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};