/**
 * TABELA IMC
IMC	    CLASSIFICAÇÃO	OBESIDADE   (GRAU)
MENOR QUE 18,5	        MAGREZA	        0
ENTRE 18,5 E 24,9	    NORMAL	        0
ENTRE 25,0 E 29,9	    SOBREPESO	    I
ENTRE 30,0 E 39,9	    OBESIDADE	    II
MAIOR QUE 40,0	        OBESIDADE GRAVE	III
 * IMC = Peso ÷ (Altura × Altura)
 */

/**
 * Novo paciente
 */
document.querySelector("#adicionar-paciente").addEventListener("click", () => {
    const nome = document.querySelector("#nome").value;
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value.replace(",", "");
    const gordura = document.querySelector("#gordura").value;

    const imc = calcularIMC(peso, altura).toFixed(2);

    const paciente = {
        nome: nome,
        peso: peso,
        altura: altura,
        gordura: gordura,
        imc: imc,
    };

    criaLinha(paciente);
});


function validaCampos(object) {
    for (const key in object) {
        if (key.value == undefined || key.value == "" || key.value == null) {
            return false;
        }
    }
    return true;
}


function calcularIMC(kilos, altura) {
    altura = altura / 100;
    return kilos / (altura * altura);
}

function criaLinha(object) {

    const tbody = document.querySelector("#tabela-pacientes");

    let tr = tbody.insertRow();
    tr.classList.add("paciente");

    let td_nome = tr.insertCell();
    td_nome.classList.add("info-nome");

    let td_peso = tr.insertCell();
    td_peso.classList.add("info-peso");

    let td_altura = tr.insertCell();
    td_altura.classList.add("info-altura");

    let td_gordura = tr.insertCell();
    td_gordura.classList.add("info-gordura");

    let td_imc = tr.insertCell();
    td_imc.classList.add("info-imc");

    td_nome.innerText = object.nome;
    td_peso.innerText = object.peso;
    td_altura.innerText = object.altura;
    td_gordura.innerText = object.gordura;
    td_imc.innerText = object.imc;

    event.preventDefault();
    /**
     * removendo linhas da tabela
     * seleciona todos elementos com classe paciente retorna um array de objeto
     * percorre o array de objeto pegando cada item filho e adciona um evento de escuta de um click
     * passando para uma arrow function que recebe o evento click passando para o currentarget elemento que está ouvindo o evento
     * quando o elemento e clicado chama a função remove
     */
    document.querySelectorAll(".paciente").forEach((linha) => {
        //console.log(linha);
        linha.addEventListener("click", (e) => {
            e.currentTarget.remove();
        });
    });


}