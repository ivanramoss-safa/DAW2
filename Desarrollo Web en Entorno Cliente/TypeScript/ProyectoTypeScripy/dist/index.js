"use strict";
// Ejercicio 1
function ejercicio1() {
    function saludar(usuario) {
        return `Hola ${usuario.nombre} tienes ${usuario.edad}`;
    }
    let nombreUsuario = document.getElementById('nombreUsuario');
    let edadUsuario = document.getElementById('edadUsuario');
    let saludoP = document.getElementById('saludoP');
    const nombre = nombreUsuario.value;
    const edad = Number(edadUsuario.value);
    const usuario = { nombre, edad };
    saludoP.textContent = saludar(usuario);
}
// Ejercicio 2
function ejercicio2() {
    function calcularPrecioTotal(productos) {
        let precioTotal = 0;
        for (let producto of productos) {
            precioTotal += producto.precio;
        }
        return precioTotal;
    }
    function mostrarCarrito(productos) {
        let nombres = [];
        let total = calcularPrecioTotal(productos);
        for (let producto of productos) {
            nombres.push(producto.nombre);
        }
        alert("Productos: " + nombres.join(', ') + "\nPrecio total: " + total);
    }
    let carrito = [
        { nombre: "Leche", precio: 1.23 },
        { nombre: "Huevos", precio: 2.5 },
        { nombre: "Yogur", precio: 2.25 },
        { nombre: "Pan", precio: 3.5 },
    ];
    mostrarCarrito(carrito);
}
// Ejercicio 3
function ejercicio3() {
    function calcularDistancia(p1, p2) {
        let horizontal = p2.x - p1.x;
        let vertical = p2.y - p1.y;
        return Math.sqrt(horizontal ** 2 + vertical ** 2);
    }
    let puntoA = { x: 1, y: 1 };
    let puntoB = { x: 4, y: 7 };
    let distancia = calcularDistancia(puntoA, puntoB);
    alert("La distancia entre los dos puntos es de: " + distancia);
}
// Ejercicio 4
function ejercicio4() {
    let usuarios = [
        { nombre: "Iván", correo: "iramosvillegas@safareyes.es", estado: true },
        { nombre: "Ana", correo: "ana@mail.com", estado: false },
        { nombre: "Luis", correo: "luis@mail.com", estado: true },
    ];
    function usuariosActivos(usuarios) {
        return usuarios.filter(usuario => usuario.estado);
    }
    let activos = usuariosActivos(usuarios);
    console.log(activos);
}
// Ejercicio 5
function ejercicio5() {
    let cadenaNumero = document.getElementById('cadenaNumero').value;
    let resultado = document.getElementById('resultado');
    if (typeof cadenaNumero == "string") {
        resultado.textContent = cadenaNumero.toUpperCase();
    }
    else if (typeof cadenaNumero == "number") {
        // @ts-ignore
        resultado.textContent = cadenaNumero ** 2;
    }
    else {
        resultado.textContent = "La cadena no es texto ni número";
    }
}
