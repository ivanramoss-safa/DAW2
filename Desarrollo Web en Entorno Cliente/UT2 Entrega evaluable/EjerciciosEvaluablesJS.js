// Ejercicio 1
function ejercicio1() {

    // Validar que la frase tenga al menos 5 palabras
    let inputFrase = document.getElementById("frase5palabras").value.trim();

    let palabras = inputFrase.split(/\s+/); 

    if (palabras.length < 5) {
        document.getElementById("resultadoValidacion").textContent = "Debes introducir al menos 5 palabras" 
        return;
    } else {
        document.getElementById("resultadoValidacion").textContent = "Frase válida con " + palabras.length + " palabras";
    }

    // Contar caracteres que no sean espacios
    let contarCaracteres = inputFrase.replace(/\s/g, "").length;
    document.getElementById("resultadoCaracteres").textContent = "En total hay " + contarCaracteres + " caracteres sin contar espacios";

    // Sustituir vocales por asteriscos
    let fraseConAsteriscos = inputFrase.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, "*");
    document.getElementById("resultadoAsteriscos").textContent = "Vocales reemplazadas por asteriscos: " + fraseConAsteriscos;

    // Sustituir cada elemento par por guion bajo, ignorando los espacios
    let fraseConGuiones = "";
    let contador = 1;

    for (let i = 0; i < inputFrase.length; i++) {
        let letra = inputFrase[i];

        if (letra === " ") {
            fraseConGuiones += " "; 
        } else if (contador % 2 === 0) {
            fraseConGuiones += "_";
            contador++;
        } else {
            fraseConGuiones += letra;
            contador++;
        }
    }
    document.getElementById("resultadoGuionBajo").textContent = "Frase con cada elemento par reemplazado por _ : " + fraseConGuiones;
}

// Ejercicio 2
let listadoLargas = [];
function ejercicio2() {
    let inputFrase = document.getElementById("frase7palabras").value.trim();

    let palabras = inputFrase.split(/\s+/);

    // Validacion de 7 palabras
    if (palabras.length !== 7) {
        document.getElementById("resultadoValidacion2").textContent = "Debes introducir solo 7 palabras"
        return;
    } else {
        document.getElementById("resultadoValidacion2").textContent = ""
    }

    // Validacion mayusculas, minusculas y 4 letras o menos
    let contadorMayusculas = 0;
    let contadorMinusculas = 0;
    let contadorCortas = 0;
    let contadorLargas = 0;

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];

        let primeraLetra = palabra[0];

        if (primeraLetra >= "A" && primeraLetra <= "Z") {
            contadorMayusculas++;
        } else if (primeraLetra >= "a" && primeraLetra <= "z") {
            contadorMinusculas++;
        }

        if (palabra.length <= 4) {
            contadorCortas++;
        } else {
            contadorLargas++;
            listadoLargas.push(palabra);
        }
    }

    if (contadorMayusculas < 2 || contadorMinusculas < 2 || contadorCortas < 2 || contadorLargas < 2) {
        document.getElementById("validacionVariadas").textContent = "Debes introducir al menos 2 palabras que empiecen por mayúscula, 2 palabras que empiecen por minúscula, 2 palabras de 4 letras o menos y 2 palabras de más de 4 letras";
        return;
    } else {
        document.getElementById("validacionVariadas").textContent = "";
    }

    // Lista ordenada alfabéticamente, sin entre mayúsculas y minúsculas y sin palabras de 4 letras o menos
    listadoLargas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    document.getElementById("listadoOrdenado").textContent = "Lista de palabras con más de 4 letras ordenadas alfabéticamente:\n" + listadoLargas.join(", ");
    document.getElementById("buscadorPalabra").style.display = "flex";
}

function buscarPalabra() {
    // Solicitud al usuario de introducir una palabra para ver si está en el listado
    let palabraUsuario = document.getElementById("palabraUsuario").value.trim();

    // Comprobar si ya está en el listado ignorando mayúsculas y minúsculas
    let encontrada = false;

    for (let palabra of listadoLargas) {
        if (palabra.toLowerCase() === palabraUsuario.toLowerCase()) {
            encontrada = true;
            break;
        }
    }

    if (encontrada === true) {
        document.getElementById("resultadoBusqueda").textContent = "La palabra está en el listado: " + palabraUsuario;
        console.info("La palabra está en el listado:", palabraUsuario);
    } else {
        listadoLargas.push(palabraUsuario);
        listadoLargas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        document.getElementById("listadoOrdenado").textContent = "Nuevo listado:\n" + listadoLargas.join(", ");
        document.getElementById("resultadoBusqueda").textContent = "La palabra " + palabraUsuario + " no está por lo que se añade al nuevo listado.\n";
    }
}

// Ejercicio 3
let alumnos = [
    {nombre: "Fran", nota: 7.25},
    {nombre: "Iván", nota: 9.5},
    {nombre: "Ramon", nota: 6.75},
    {nombre: "Maria", nota: 8.6},
];

function ejercicio3() {
    // Mostrar listado de alumnos con sus notas
    let listadoAlumnos = "Alumnos y notas iniciales:\n";
    for (let alumno of alumnos) {
        listadoAlumnos += alumno.nombre + ": " + alumno.nota + "\n";
    }
    alert(listadoAlumnos);
    document.getElementById("listadoAlumnos").textContent = listadoAlumnos;

    // Pedir al usuario que introduzca un nombre de un alumno
    let nombreAlumno = prompt("Introduce el nombre de un alumno:");

    // Mostrar nota del alumno introducido
    let alumnoEncontrado = false
    let estudiante = null;

    for (let alumno of alumnos) {
        if (alumno.nombre.toLowerCase() === nombreAlumno.toLowerCase()) {
            alumnoEncontrado = true;
            estudiante = alumno;
            break;
        }
    }

    if (alumnoEncontrado) {
        document.getElementById("alumnoEncontrado").textContent = "La nota de " + estudiante.nombre + " es de " + estudiante.nota;
    } else {
        alert("El alumno " + nombreAlumno + " no está registrado por lo que se dará de alta con la nota que indiques");
        let notaNueva;
        do {
            notaNueva = parseFloat(prompt("Introduce la nota del nuevo alumno (0-10):"));
        } while (isNaN(notaNueva) || notaNueva < 0 || notaNueva > 10);

        let notaDosDecimales = parseFloat(notaNueva.toFixed(2));

        alumnos.push({nombre: nombreAlumno, nota: notaDosDecimales});
        document.getElementById("resultadoAlumno").textContent = "Alumno " + nombreAlumno + " registrado con nota: " + notaDosDecimales;
        listadoAlumnos += nombreAlumno + ": " + notaDosDecimales;
        document.getElementById("listadoAlumnos").textContent = listadoAlumnos;
    }

    // Calcular nota media
    let sumaNotas = 0;
    for (let i = 0; i < alumnos.length; i++) {
        sumaNotas += alumnos[i].nota;
    }
    let media = sumaNotas / alumnos.length;
    console.info("Nota media de la clase: " + media.toFixed(2));

    // Mostrar nombres de todos los alumnos ordenados alfabéticamente
    let nombresOrdenados = alumnos.map(a => a.nombre).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    console.info("Alumnos ordenados alfabéticamente: " + nombresOrdenados.join(", "));
}

// Ejercicio 4
function ejercicio4() {
    alert("Mira el log para ver los resultados")
    let multiplos2 = [];
    let multiplos3 = [];

    for (let i = 0; i <= 30; i += 2) multiplos2.push(i);
    for (let i = 0; i <= 30; i += 3) multiplos3.push(i);

    // Unión
    let union = multiplos2.concat(multiplos3.filter(x => !multiplos2.includes(x)));
    console.log("%cUnión: " + union.join(", "), "color: blue; font-weight: bold;");

    // Intersección
    let interseccion = multiplos2.filter(x => multiplos3.includes(x));
    console.log("%cIntersección: " + interseccion.join(", "), "color: green; font-weight: bold;");

    // Diferencia 2-3
    let diff1 = multiplos2.filter(x => !multiplos3.includes(x));
    console.log("%cDiferencia (2-3): " + diff1.join(", "), "color: orange; font-weight: bold;");

    // Diferencia 3-2
    let diff2 = multiplos3.filter(x => !multiplos2.includes(x));
    console.log("%cDiferencia (3-2): " + diff2.join(", "), "color: red; font-weight: bold;");

    // Exclusión (elementos que no están en la intersección)
    let exclusivos = union.filter(x => !interseccion.includes(x));
    console.log("%cExclusión: " + exclusivos.join(", "), "color: purple; font-weight: bold;");
}

// Ejercicio 5
function ejercicio5() {
    let entradaValida = false;
    let numeros = [];

    // Pedir números hasta que todos sean válidos
    do {
        let input = prompt("Introduce una serie de números separados por comas (ej: 1,2,3):");
        let valores = input.split(",");
        numeros = [];

        let todoNumerico = true;
        for (let valor of valores) {
            let num = parseFloat(valor.trim());
            if (isNaN(num)) {
                todoNumerico = false;
                break;
            }
            numeros.push(num);
        }

        if (todoNumerico) {
            entradaValida = true;
        } else {
            alert("Algún valor no es numérico. Vuelve a introducir los números correctamente.");
        }
    } while (!entradaValida);

    // Filtrar los números que aparecen solo una vez
    let unicos = numeros.filter(function(n) {
        return numeros.indexOf(n) === numeros.lastIndexOf(n);
    });

    document.getElementById("numerosUnicos").textContent = "Valores únicos: " + unicos.join(", ");

    // Calcular la media de los únicos
    let suma = 0;
    for (let i = 0; i < unicos.length; i++) {
        suma += unicos[i];
    }
    let media = (unicos.length > 0) ? (suma / unicos.length).toFixed(2) : 0;

    document.getElementById("mediaUnicos").textContent = "Media de los valores únicos: " + media;
}

// Ejercicio 6
function ejercicio6() {
    // Pedir la frase o palabra al usuario
    let frase = prompt("Introduce una frase o palabra para verificar si es un palíndromo:");

    // Convertir todo a minúsculas para no diferenciar mayúsculas y minúsculas
    frase = frase.toLowerCase();

    // Eliminar todos los caracteres que no sean letras (incluyendo espacios, puntuación)
    let fraseLimpia = "";
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];
        if (
            (letra >= "a" && letra <= "z") ||
            letra === "á" || letra === "é" || letra === "í" || letra === "ó" || letra === "ú" ||
            letra === "à" || letra === "è" || letra === "ì" || letra === "ò" || letra === "ù"
        ) {
            fraseLimpia += letra;
        }
    }

    // Crear la frase invertida
    let fraseInvertida = "";
    for (let i = fraseLimpia.length - 1; i >= 0; i--) {
        fraseInvertida += fraseLimpia[i];
    }

    // Comparar la frase limpia con la invertida
    if (fraseLimpia === fraseInvertida) {
        document.getElementById("resultadoPalindromo").textContent = "¡Es un palíndromo!";
    } else {
        document.getElementById("resultadoPalindromo").textContent = "No es un palíndromo";
    }

}


// Ejercicio 7
// Array global para guardar las tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea() {
    let nombreTarea = prompt("Introduce el nombre de la tarea:");

    // Validar que la tarea no esté vacía
    if (!nombreTarea || nombreTarea.trim() === "") {
        alert("No puedes añadir una tarea vacía");
        return;
    }

    // Validar que no exista ya
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].nombre.toLowerCase() === nombreTarea.toLowerCase()) {
            alert("Esa tarea ya existe");
            return;
        }
    }

    // Agregar la tarea
    tareas.push({ nombre: nombreTarea, completada: false });
    alert("Tarea añadida correctamente");
}

// Función para completar una tarea
function completarTarea() {
    let nombreTarea = prompt("Introduce el nombre de la tarea a completar:");

    let encontrada = false;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].nombre.toLowerCase() === nombreTarea.toLowerCase()) {
            tareas[i].completada = true;
            alert("Tarea completada");
            encontrada = true;
            break;
        }
    }

    if (!encontrada) {
        alert("No se encontró la tarea");
    }
}

// Función para eliminar una tarea
function eliminarTarea() {
    let nombreTarea = prompt("Introduce el nombre de la tarea a eliminar:");

    let encontrada = false;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].nombre.toLowerCase() === nombreTarea.toLowerCase()) {
            tareas.splice(i, 1);
            alert("Tarea eliminada");
            encontrada = true;
            break;
        }
    }

    if (!encontrada) {
        alert("No se encontró la tarea");
    }
}

// Función para mostrar la lista completa
function mostrarLista() {
    if (tareas.length === 0) {
        document.getElementById("resultadoTareas").textContent = "No hay tareas";
        return;
    }

    let resultado = "Lista de tareas:\n";
    for (let i = 0; i < tareas.length; i++) {
        let estado = tareas[i].completada ? "Completada" : "Pendiente";
        resultado += tareas[i].nombre + " - " + estado + "\n";
    }

    document.getElementById("resultadoTareas").textContent = resultado;
}

// Función para mostrar solo las pendientes
function mostrarPendientes() {
    let pendientes = [];
    for (let i = 0; i < tareas.length; i++) {
        if (!tareas[i].completada) {
            pendientes.push(tareas[i].nombre);
        }
    }

    if (pendientes.length === 0) {
        document.getElementById("resultadoTareas").textContent = "No hay tareas pendientes";
        return;
    }

    let resultado = "Tareas pendientes:\n";
    for (let i = 0; i < pendientes.length; i++) {
        resultado += pendientes[i] + "\n";
    }

    document.getElementById("resultadoTareas").textContent = resultado;
}