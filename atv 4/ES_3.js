const ano = parseInt(prompt("Digite um ano válido (depois de cristo) :"));
const sec = Math.ceil(ano / 100);

document.write("O ano " + ano + " pertence ao século " + sec + ".");