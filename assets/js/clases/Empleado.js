import Persona from "./Persona.js";

class Empleado extends Persona{
    constructor(id, nombre, apellido, edad, sueldo, ventas){
        super(id, nombre, apellido, edad);
        this.sueldo = this.ValidarNumeroPositivo(sueldo);
        this.ventas = this.ValidarNumeroPositivo(ventas);
    }

    ToString(){
        let string = super.ToString() + "\n" 
                    + "Sueldo: " + parseFloat(this.sueldo) + "\n"
                    + "Ventas: " + parseFloat(this.ventas);

        return string;
    }
}

export default Empleado;