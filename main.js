


const controle= document.querySelectorAll ("[data-controle]")
const estatistica =document.querySelectorAll ("[data-estatistica]");
const cores = document.querySelectorAll(".botao-cor")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener ("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle);   
        
    })
})
// Agora ao chamar a função atualizaEstatistica pegamos o sinal da operação (+ ou -) como na função manipulaDados para determinar com o if se adiciona ou subtrai valor a estatística

function manipulaDados (operacao, controle){
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;

    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca, operacao) {  //Adicionei outro parâmentro a função atualizaEstatística e utilizei o if da função anterior
    estatistica.forEach((elemento) => {
        if(operacao === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        } else{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}


cores.forEach ( (elemento) =>{
    elemento.addEventListener("click", (e) => mudaCor(e.target.dataset.cor))

})

function mudaCor(cor) {
    document.querySelector(".robo").src = `img/Robotron 2000 - ${cor}.png`;
}