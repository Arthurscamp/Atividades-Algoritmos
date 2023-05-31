const xC = parseFloat(prompt("Digite a coordenada X do centro do círculo:"));
const yC = parseFloat(prompt("Digite a coordenada Y do centro do círculo:"));
const raio = parseFloat(prompt("Digite o raio do círculo:"));
const xt = parseFloat(prompt("Digite a coordenada X do ponto a ser testado:"));
const yt = parseFloat(prompt("Digite a coordenada Y do ponto a ser testado:"));

const distancia = Math.sqrt(Math.pow(xt - xC, 2) + Math.pow(yt - yC, 2));

if (distancia <= raio) {
  document.write("O ponto (" + xt + ", " + yt + ") está dentro do círculo.");
} else {
  document.write("O ponto (" + xt + ", " + yt + ") está fora do círculo.");
}