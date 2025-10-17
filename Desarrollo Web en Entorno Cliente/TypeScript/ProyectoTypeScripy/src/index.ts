// Ejercicio 1
function ejercicio1(){
    interface Usuario {
        nombre: string;
        edad: number;
    }

    function saludar(usuario: Usuario):string {
        return `Hola ${usuario.nombre} tienes ${usuario.edad}`;
    }

    let nombreUsuario = document.getElementById('nombreUsuario') as HTMLInputElement;
    let edadUsuario = document.getElementById('edadUsuario') as HTMLInputElement;
    let saludoP = document.getElementById('saludoP') as HTMLParagraphElement;

    const nombre : string = nombreUsuario.value;
    const edad : number = Number(edadUsuario.value);

    const usuario: Usuario = {nombre, edad};
    saludoP.textContent = saludar(usuario);
}

// Ejercicio 2
function ejercicio2(){
    interface Producto {
        nombre: string;
        precio: number;
    }

    function calcularPrecioTotal(productos: Producto[]):number {
        let precioTotal = 0;
        for (let producto of productos) {
            precioTotal += producto.precio;
        }
        return precioTotal;
    }

    function mostrarCarrito(productos:Producto[]){
        let nombres = [];
        let total = calcularPrecioTotal(productos);

        for (let producto of productos) {
            nombres.push(producto.nombre);
        }

        alert("Productos: " + nombres.join(', ') + "\nPrecio total: " + total);
    }

    let carrito : Producto[] = [
        {nombre: "Leche", precio: 1.23},
        {nombre: "Huevos", precio: 2.5},
        {nombre: "Yogur", precio: 2.25},
        {nombre: "Pan", precio: 3.5},
    ]

    mostrarCarrito(carrito);
}

// Ejercicio 3
function ejercicio3(){
    interface Punto {
        x: number;
        y: number;
    }

    function calcularDistancia(p1:Punto, p2:Punto){
        let horizontal = p2.x - p1.x;
        let vertical = p2.y - p1.y;

        return Math.sqrt(horizontal ** 2 + vertical ** 2);
    }

    let puntoA: Punto = {x: 1, y: 1};
    let puntoB: Punto = {x: 4, y: 7};

    let distancia = calcularDistancia(puntoA, puntoB);

    alert("La distancia entre los dos puntos es de: " + distancia);

}

// Ejercicio 4
function ejercicio4(){
    interface Usuario {
        nombre: string;
        correo: string;
        estado: boolean;
    }


    let usuarios: Usuario[] = [
        {nombre: "Iván", correo: "iramosvillegas@safareyes.es", estado: true},
        { nombre: "Ana", correo: "ana@mail.com", estado: false },
        { nombre: "Luis", correo: "luis@mail.com", estado: true },
    ]

    function usuariosActivos(usuarios: Usuario[]){
        return usuarios.filter(usuario => usuario.estado);
    }

    let activos = usuariosActivos(usuarios);

    console.log(activos);

}

// Ejercicio 5
function ejercicio5(){
    let cadenaNumero = document.getElementById('cadenaNumero') as HTMLInputElement;
    let resultado = document.getElementById('resultado') as HTMLParagraphElement;

    let value 

    if (typeof cadenaNumero == "string") {
        resultado.textContent = cadenaNumero.toUpperCase();
    } else if (typeof cadenaNumero == "number") {
        resultado.textContent = cadenaNumero ** 2;
    } else {
        resultado.textContent = "La cadena no es texto ni número";
    }

}