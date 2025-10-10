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
    let listadoLargas = []

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
            listadoLargas += palabra;
        }
    }

    if (contadorMayusculas < 2 || contadorMinusculas < 2 || contadorCortas < 2 || contadorLargas < 2) {
        document.getElementById("validacionVariadas").textContent = "Debes introducir al menos 2 palabras que empiecen por mayúscula, 2 palabras que empiecen por minúscula, 2 palabras de 4 letras o menos y 2 palabras de más de 4 letras";
        return;
    } else {
        document.getElementById("validacionVariadas").textContent = "";
    }

    // Lista ordenada alfabeticamente, sin entre mayúsculas y minúsculas y sin palabras de 4 letras o menos
    listadoLargas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    document.getElementById("listadoOrdenado").textContent = "Lista de palabras con más de 4 letras ordenadas alfabéticamente " + listadoLargas;
}