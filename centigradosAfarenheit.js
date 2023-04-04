//Realizar la conversión de grados farenheit a grados centígrados
let centigrados, farenheit;
    centigrados = parseFloat(prompt("Ingresa la  cantidad de grados centígrados"));

    farenheit = (9/5 * centigrados + 32);
    console.log(centigrados+ "°C equivalen a " + farenheit + " °F");