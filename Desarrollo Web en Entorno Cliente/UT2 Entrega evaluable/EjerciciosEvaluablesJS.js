function ejercicio1() {

    // Validar que la frase tenga al menos 5 palabras
    let inputFrase = document.getElementById("frase5palabras").value.trim();

    let palabras = inputFrase.split(/\s+/); 

    if (palabras.length < 5) {
        alert("Debes introducir al menos 5 palabras");
        return;
    }

    // Contar caracteres que no sean espacios
    let contarCaracteres = inputFrase.replace(/\s/g, "").length;

    // Sustituir vocales por asteriscos
    let fraseConAsteriscos = inputFrase.replace(/[aeiouAEIOU]/g, "*");

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
}