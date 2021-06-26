//Varias variaveis = Global ou Local
let num = document.querySelector('input.txtnum'); //Aqui entra o numero em forma de string por padrão do JS, por isso nas funões secundárias eles são convertidos. 
let list = document.querySelector('select.txtlist');
let result = document.querySelector('div.res');
let valores = []; //Analise de dados com esse vetor com o botão finalizar (Nova função)

//Finção que verifica se é um numero
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {// conversão
        return true;
    } else {
        return false;
    }
}
//Função ue verifica se está na lista 
function inList(n, lista) {
    if (lista.indexOf(Number(n)) != -1) { //se o valor de num passado como parametro para n for diferente de -1 (ou seja não encontrado na lista) então retorne verdadeiro.
        return true; //O elemento encontrado, ou seja, existe um valor
    } else {
        return false;
    }
}

function adicionar() { //Função Main
    if (isNumero(num.value) && !inList(num.value, valores)) { //Criação de funcões verificadoras se a condião for atendido precisa ser um numero e não pode estar na lista
        //alert('Tudo Ok') teste
        valores.push(Number(num.value)); //push adiciona o elemento ao vetor
        let item = document.createElement('option');
        item.text = `O valor ${num.value} foi adicionado.`;
        list.appendChild(item);
        result.innerHTML = '';
    } else { //Se a condição não for atendida
        alert('O valor já existe na lista ou não é um número');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione um valor antes de finalizar');
    } else {
        let total = valores.length //Tamanho do vetor
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0

        for(let posicao in valores){
            soma += valores[posicao];
            if (valores[posicao] > maior) {
                maior = valores[posicao];
            } else if (valores[posicao] < menor) {
                menor = valores[posicao];
            }
        }
        media = soma / total
        result.innerHTML = '';
        result.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        result.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        result.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        result.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        result.innerHTML += `<p>A media é ${media}</p>`
    }
    
}