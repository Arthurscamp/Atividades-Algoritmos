let v1= Number(prompt("Qual o valor 1?"))
let q1= Number(prompt("Qual a quantidade 1?"))
let v2= Number(prompt("Qual o valor 2?"))
let q2= Number(prompt("Qual a quantidade 2?"))
let ipi= Number(prompt("Quanto é o IPI?"))


let f1 = (v1*q1+v2*q2)*(ipi/100+1)

document.write(`O valor total a ser pago é ${f1}`)
