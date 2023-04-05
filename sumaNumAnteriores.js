//Crear programa para calcular la suma de los "n" primeros numeros naturales
let suma, numero;
    numero = parseInt(prompt("Ingresa el numero para sumar todos los anteriores a él"));
    suma = numero * (numero+1)/2;
    document.write("La suma total de todos los numeros es "+suma);