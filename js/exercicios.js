
/**
 * exercicio 1
 */
const btnCalcular = document.querySelector("#calcular");

btnCalcular.addEventListener("click", () => {
  const num1 =parseInt(document.querySelector("#num1").value);
  const num2 =parseInt(document.querySelector("#num2").value);
  const resultado = document.querySelector("#resultado");
  resultado.textContent = num1+num2;
});

/**
 * exercicio 2
 * 
const salarioAtual= 100;
const aumento = 10;
const resultado = salarioAtual + salarioAtual*aumento/100;
console.log(resultado);
 */

/**
 * exercicio 3
 *  
const valorA = 10;
const valorB = 5;
let valorC = 0;
valorA == valorB ? console.log(valorA + valorB) : console.log(valorA * valorB);
valorC= valorA*valorB;
console.log(valorC);
*/

/**
 * exercicio 4


const valorProduto = 100;
let total = '';
const qtdParcelas= 0;
const aumento1= 10;
const aumento2= 20;

if (qtdParcelas==3) {
    total=valorProduto + valorProduto*aumento1/100;
    alert(total);
}else if (qtdParcelas==5) {
    total=valorProduto + valorProduto*aumento2/100;
    alert(total);
}else{
    alert(total =valorProduto);
}

 */

/**
 * exercicio 5
 * 
const aluno= 'Isac';
const nota1 = 2;
const nota2 = 1;
const nota3 = 5;
const media =nota1 + nota2 + nota3 / 3

if (!media==8) {
    alert(`o aluno: ${aluno} foi reprovado com media: ${media.toFixed(2)}`);
}else{
    alert(`o aluno: ${aluno} foi aprovado com media: ${media.toFixed(2)}`);
}

*/