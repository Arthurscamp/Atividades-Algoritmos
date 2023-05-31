let peso = Number(prompt("Digite o peso da pessoa em kg:"));
let altura = Number(prompt("Digite a altura da pessoa em metros:"));

let imc = peso / (altura**2);

document.write(`O IMC da pessoa é:  ${imc.toFixed(2)} `);

if (imc < 18.5) {
  document.write("A pessoa está abaixo do peso.");
} else if (imc >= 18.5 && imc < 25) {
  document.write("A pessoa está com peso normal.");
} else if (imc >= 25 && imc < 30) {
  document.write("A pessoa está acima do peso (sobrepeso).");
} else if (imc >= 30 && imc < 35) {
  document.write("A pessoa está com obesidade grau I.");
} else if (imc >= 35 && imc < 40) {
  document.write("A pessoa está com obesidade grau II.");
} else {
  document.write("A pessoa está com obesidade grau III.");
}