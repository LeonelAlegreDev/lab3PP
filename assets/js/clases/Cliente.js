import Persona from "./Persona.js";

class Cliente extends Persona{
    constructor(id, nombre, apellido, edad, compras, telefono){
        super(id, nombre, apellido, edad);
        this.compras = this.ValidarNumeroPositivo(compras);
        this.telefono = this.ValidarTelefono(telefono);
    }

    ToString(){
        let string = super.ToString() + "\n" 
                    + "Compras: " + parseFloat(this.compras) + "\n"
                    + "Telefono: " + this.telefono;

        return string;
    }

    ValidarTelefono(telefono){
        try{
            this.ValidarCadena(telefono);
            //otras validaciones de telefono
            return telefono;
        }
        catch{
            throw new Error("Error telefono no valido.");
        }

    }
}

export default Cliente;