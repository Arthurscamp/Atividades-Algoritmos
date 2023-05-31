const a = parseFloat(prompt("Digite o coeficiente a:"));
const b = parseFloat(prompt("Digite o coeficiente b:"));
const c = parseFloat(prompt("Digite o coeficiente c:"));

const delta = Math.pow(b, 2) - 4 * a * c;

if (delta < 0) {
 document.write("A equação não possui raízes reais.");
} else if (delta === 0) {
  const x = -b / (2 * a);
 document.write("A equação possui uma raiz real: x = " + x);
} else {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
 document.write("A equação possui duas raízes reais: x1 = " + x1 + ", x2 = " + x2);
}