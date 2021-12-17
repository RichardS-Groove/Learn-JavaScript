let x = prompt("Ingrese el primer número para sumar");
let y = prompt("Ingrese el segundo número para sumar");

let num1 = parseInt(x);
let num2 = parseInt(y);

function sumar(x, y) {
  let rest = x + y;
  return rest;
}

let resultado = sumar(num1, num2);
document.write(`<h2>La suma de los números ingresados es: ${resultado}</h2>`);
