let sm = Number(prompt("Qual o salário mínimo atual?"))
let ss = Number(prompt("Qual o seu salário?"))

fs=ss/sm

fs<=1 ? document.write(`Seu salário da ${fs.toFixed(2)} salário mínimo`) :  document.write(`Seu salário da ${fs.toFixed(2)} salários mínimos`)