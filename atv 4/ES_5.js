const lado1 = parseFloat(prompt("Digite o valor do primeiro lado:"));
const lado2 = parseFloat(prompt("Digite o valor do segundo lado:"));
const lado3 = parseFloat(prompt("Digite o valor do terceiro lado:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  document.write("Os valores formam um triângulo.<br/>");

  if (lado1 === lado2 && lado1 === lado3) {
    document.write("O triângulo é equilátero.");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    document.write("O triângulo é isósceles.");
  } else {
    document.write("O triângulo é escaleno.");
  }
} else {
  document.write("Os valores não formam um triângulo.");
}  