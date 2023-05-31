const ano = parseInt(prompt("Digite um ano válido (depois de cristo):"));

if (ano>=1) {
    

 if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
  document.write(ano + " é um ano bissexto.");
 } 

 else {
  document.write(ano + " não é um ano bissexto.");
 }
} 
else{
  document.write("digite um ano válido (depois de cristo).");
}