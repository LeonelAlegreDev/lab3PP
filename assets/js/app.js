import Empleado from "./clases/Empleado.js";
import Cliente from "./clases/Cliente.js";

let tabla = document.getElementById("tabla_datos");
let filtro_entidad = document.getElementById("filtro_entidad");
let filtro_id = document.getElementById("filtro_id");
let filtro_nombre = document.getElementById("filtro_nombre");
let filtro_apellido = document.getElementById("filtro_apellido");
let filtro_edad = document.getElementById("filtro_edad");
let calcular_promedio = document.getElementById("calcular_promedio");

let clientes = [];
let empleados = [];
let table_elements = [];

CargarDatos(clientes, empleados);
manejarEventosFiltros();

mostrarDatos(tabla, filtro_entidad.value, clientes);

function mostrarDatos(tabla, entidad, array_datos){
    // valor encabezados comunes
    let campos = ["ID", "Nombre", "Apellido", "Edad"];
    
    // valor encabezados de entidad
    let campos_entidad = [];

    // referencia a elementos thead y tbody
    let thead = tabla.querySelector("thead");
    let tbody = tabla.querySelector("tbody");

    // borra el contenido de la thead y tbody
    thead.innerHTML = "";
    tbody.innerHTML = "";

    // añade una nueva fila thead 
    let tr = document.createElement("tr");    
    thead.appendChild(tr);

    // recorre array con los encabezados
    campos.forEach(element => {
        // añade un nuevo encabezado
        let th = document.createElement("th");
        tr.appendChild(th);

        //  añade un boton del encabezado
        let boton = document.createElement("button");
        th.appendChild(boton);

        // añade un nodo de texto con el valor del encabezado
        let text = document.createTextNode(element);
        boton.appendChild(text);

        // establece el id del boton con el valor del ecanbezado
        boton.setAttribute("id", element.toLowerCase());
    });
    
    // establece los encabezados de la entidad
    switch(entidad){
        case "Cliente":
            campos_entidad = ["Compras", "Telefono"];
            break;

        case "Empleado":
            campos_entidad = ["Sueldo", "Ventas"];
            break;
    }

    // crea los encabezados de entidad
    campos_entidad.forEach(element => {
        // añade un nuevo encabezado
        let th = document.createElement("th");
        tr.appendChild(th);

        //  añade un boton al encabezado
        let boton = document.createElement("button");
        th.appendChild(boton);

        // añade un nodo de texto con el valor del encabezado
        let text = document.createTextNode(element);
        boton.appendChild(text);
        
        // establece el id del boton con el valor del ecanbezado
        boton.setAttribute("id", element.toLowerCase());
    });

    // recorre el array de datos
    array_datos.forEach(element => {
        // añade una nueva fila a tbody
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        // itera las propiedades del elemento
        for(let clave in element){
            // guarda el valor de la clave
            let valor = element[clave];

            // añade un nuevo campo a la fila con el valor del elemento
            let td = document.createElement("td");
            tr.appendChild(td);
            td.appendChild(document.createTextNode(valor));
        }

        // añade una referencia al elemento cargado en la tabla
        table_elements.push(element);
    });
}

function switch_entidad(){
    switch(filtro_entidad.value){
        case "Cliente":
            mostrarDatos(tabla, filtro_entidad.value, clientes);
            break;
        case "Empleado":
            mostrarDatos(tabla, filtro_entidad.value, empleados);
            break;
    }
}

function manejarEventosFiltros(){
    filtro_entidad.addEventListener("change", function() {
        switch_entidad();
    });
    filtro_id.addEventListener("change", function() {
        // actualizar
        console.log(filtro_id.checked);
    });
    filtro_nombre.addEventListener("change", function() {
        // actualizar
        console.log(filtro_nombre.checked);
    });
    filtro_apellido.addEventListener("change", function() {
        // actualizar
        console.log(filtro_apellido.checked);
    });
    filtro_edad.addEventListener("change", function() {
        // actualizar
        console.log(filtro_edad.checked);
    });
    calcular_promedio.addEventListener("click", function(){
        calcularPromedio();
        console.log("caluclar_promedio");
    });
}

function CargarDatos(clientes, empleados){
    var data = '[{"id":1, "nombre":"Marcelo", "apellido":"Luque", "edad":45, "ventas":15000, "sueldo":2000},{"id":2, "nombre":"Ramiro", "apellido":"Escobar", "edad":35, "ventas": 6000, "sueldo": 1000},{"id":3, "nombre":"Facundo", "apellido":"Cairo", "edad":30, "ventas":500, "sueldo":15000},{"id":4, "nombre":"Fernando", "apellido":"Nieto", "edad":18, "compras":8000, "telefono":"152111131"},{"id":5, "nombre":"Manuel", "apellido":"Loza", "edad":20, "compras":50000, "telefono":"42040077"},{"id":666, "nombre":"Nicolas", "apellido":"Serrano", "edad":23, "compras":7000, "telefono":"1813181563"}]';
    data = JSON.parse(data);
    data.forEach(element => {
        const id = element.id;
        const nombre = element.nombre;
        const apellido = element.apellido;
        const edad = element.edad;

        if(element.ventas !== undefined && element.sueldo !== undefined){
            const ventas = element.ventas;
            const sueldo = element.sueldo;
            const empleado = new Empleado(id, nombre, apellido, edad, sueldo, ventas);
        
            empleados.push(empleado);
        }
        else if(element.compras !== undefined && element.telefono !== undefined){
            const compras = element.compras;
            const telefono = element.telefono;
            const cliente = new Cliente(id, nombre, apellido, edad, compras, telefono);
        
            clientes.push(cliente);
        }
        else{
            console.log("Error al convertir datos.");
        }
    });
}


function calcularPromedio(){
    console.log(table_elements);
}