class Persona{
    /**
     *  Constructor de la clase Persona.
     * 
     *  @param {number} id - El ID de la persona
     *  @param {string} nombre - El nombre de la persona
     *  @param {string} apellido - El apellido de la persona
     *  @param {number} edad - La edad de la persona (debe ser un entero mayor a 15)
     */
    constructor (id, nombre, apellido, edad){
        this.id = this.ValidarId(id);
        this.nombre = this.ValidarCadena(nombre);
        this.apellido = this.ValidarCadena(apellido);
        this.edad = this.ValidarEdad(edad);
    }

    /**
     *  @returns Retorna un string con informacion del objeto
     */
    ToString(){
        let string = 'ID: ' + parseInt(this.id, 10) + '\n'
                    + 'Nombre: ' + this.nombre + '\n'
                    + 'Apellido: ' + this.apellido + '\n'
                    + 'Edad: ' + parseInt(this.edad);

        return string;
    }

    ToJson(){
        return JSON.stringify(this);
    }
    
    // Valida que id sea entero no nulo mayor a 0
    ValidarId(id){
        try{
            this.ValidarNumeroPositivo(id);
            if(Number.isInteger(id)){
                // otras validaciones de id
                return id;
            }
            else{ throw new Error("Error id no valido.");}
        }
        catch{
            throw new Error("Error id no valido.");
        }
    }

    // Valida que la cadena no nula ni vacia
    ValidarCadena(cadena){
        if (typeof cadena === 'string' && cadena.trim() !== '') {
            return cadena;
        } else {
            throw new Error("Erorr cadena no valida.");
        }
    }

    // Valida que edad sea entero mayor a 15
    ValidarEdad(edad){
        if (Number.isInteger(edad) && edad > 15) {
            return edad;
        } else {
            throw new Error("Error edad no valida.");
        }
    }

    // Valida que un numero sea entero no nulo mayor a 0
    ValidarNumeroPositivo(numero){
        if (typeof numero === 'number' && numero > 0 && !isNaN(numero)) {
            return numero;
        } else {
            throw new Error("Error entero no valido.");
        }
    }
}
export default Persona; // Exporta la clase Persona
