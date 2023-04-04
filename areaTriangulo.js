//calcular el área de un triángulo
let base, altura, area;

    base = parseFloat(prompt("Ingresar la longitud de la base del triángulo"));
    altura = parseFloat(prompt("Ingresar la longitud de la altura del triángulo"));

    area = (base * altura)/2;

    alert("El area del triangulo es "+ area);