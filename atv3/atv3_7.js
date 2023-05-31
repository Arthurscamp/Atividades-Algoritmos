let pc = Number(prompt("Escreva o preço de custo do produto: "))
let pct = Number(prompt("Escreva a porcentagem que você quer adicionar para a venda do produto(apenas em números inteiros, não colocar o simbolo %.): "))
let pct2 = (pct/100)
let vf = pc + (pct2*pc)
document.write(`O valor de venda final é ${vf.toFixed(2)}`)

