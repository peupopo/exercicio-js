// Fernanda Mell Albuquerque da Silva
// Pedro de Oliveira Silva

function obterTabela(){
    let obj = {numeros: [1, 3, 7, 9, -1, 0, 4],
        qt: 7
    };

    return obj;
}

function montarTabela(){
    let objNumeros = obterTabela();
    let div = document.createElement("div");
    let divQtd = document.createElement("div");
    let divSoma = document.createElement("div");
    let soma = 0;
    
    div.innerHTML;
    for(let i=0; i < objNumeros.numeros.length; i++){
        let divNumeros = document.createElement("div");
        div.appendChild(divNumeros);
        divNumeros.innerHTML = objNumeros.numeros[i];

        soma = soma + objNumeros.numeros[i];
    }

    divQtd.innerHTML = "Quantidade: " + objNumeros.qt;
    divSoma.innerHTML = "Soma: " + soma;
    document.body.appendChild(div);
    document.body.appendChild(divQtd);
    document.body.appendChild(divSoma);
    
} 