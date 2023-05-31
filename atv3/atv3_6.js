let v = Number(prompt("Qual o valor do produto? "))
let p = Number(prompt("Em quantas prestações você deseja pagar(aceitamos até 12 vezes sem juros)? "))
let r = v/p
document.write(`O valor de cada prestação por mês vai ser de ${r.toFixed(2)}`)