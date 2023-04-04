//calcular el area de un circulo ingresando la longitud del radio
const pi = 3.1416;
let area, radio;

    radio = parseFloat(prompt("Ingrese la longitud del radio del circulo que necesita saber el área"));
    area = pi * (radio*radio);

alert("El area del circulo es "+area);