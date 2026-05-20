function lutar(){
const classe = document.getElementById('classe').value;
const arma = document.getElementById('arma').value.trim();
const log = document.getElementById('log');

if(!arma){
    log.innerHTML = "❌ Você esqueceu de equipar uma arma";
    return;}

    const dado = Math.floor(Math.random()*20)+1;
    let resultado = `🎲 Dado: ${dado} | <strong>${classe}</strong> com <strong>${arma}</strong>`;

    switch(classe){
        case "Guerreiro":
            if(arma.toLowerCase()=== "espada" && dado>5){
                resultado += "<span class='sucesso'> SUCESSO: Você decapitou o inimigo com um corte da espada</span>"
                innerHTML = resultado
            }else if(dado > 15){
                resultado += "<span class='sucesso'> VITÓRIA: Você derrotou o inimigo com coragem e determinação</span>"
                innerHTML = resultado
            }else{
                resultado += "<span clas='derrota'> DERROTA: O inimigo te acerta com um golpe poderoso, sua visão escurece e você desaba no chão, completamente morto</span>"
                innerHTML = resultado
            }
        break;

        case "Mago":
            if(arma.toLowerCase() === "cajado" && dado>8){
                resultado += "<span class='sucesso'> VITÓRIA: Utilizando seu cajado, você invoca uma poderosa bola de fogo e queima o inimigo até a morte</span>"
                innerHTML = resultado
            }else if(dado > 20){
                resultado += "<span class='sucesso'> VITÓRIA: Você fez o imposivel, nunca um mago matou um inimigo sem utilizar um cajado</span>"
                innerHTML = resultado
            }else{
                resultado += "<span clas='derrota'> DERROTA: O inimigo te acerta com um golpe poderoso, sua visão escurece e você desaba no chão, completamente morto</span>"
                innerHTML = resultado
            }
        break;
    }
}