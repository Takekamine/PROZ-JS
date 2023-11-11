let numero = document.querySelector("h1")
let botao = document.querySelector(".click")
let contagem = 0

function adicionarUm(){
contagem = contagem +1
numero.innerText = contagem
}
botao.addEventListener("click", adicionarUm)

let button = document.querySelector(".eventoMouse")
let span = document.querySelector("span")
let section = document.querySelector("section")

function mostrarSpan(){
    span.style.opacity="100"
}

function ocultarSpan(){
    span.style.opacity="0"
}

function umClick(){
    section.innerText="Um click"
}

function doubleClick(){
    section.innerText="Double click"
}

button.addEventListener("mouseover", mostrarSpan)
button.addEventListener("mouseout", ocultarSpan)
button.addEventListener("click",umClick)
button.addEventListener("dblclick",doubleClick)


let elementoClicado = document.getElementById("elemento-clicado");
let botaoTempo = document.getElementById("botao-tempo");
let tempo = document.getElementById("tempo");

botaoTempo.addEventListener("click",function(evento){
    //console.log(evento)//mostra todos eventos no console
    console.log(evento.timeStamp)
    tempo.innerText = evento.timeStamp
})

document.addEventListener("click",function(e){
    console.log(e.target)
    elementoClicado.innerText = e.target.id
})


let keyText = document.querySelector("#key-text")
let codeText= document.querySelector("#code-text")
let quadrado = document.querySelector("#quadrado")
let distanciaDaEsquerda = 0
let distanciaDoTopo = 0

document.addEventListener("keyup",(e)=>{
    keyText.innerText = e.key;
    codeText.innerText = e.code;
})

document.addEventListener("keydown", (e)=>{
    if(e.code == "ArrowRight"){
        distanciaDaEsquerda = distanciaDaEsquerda +10
        quadrado.style.left = distanciaDaEsquerda +"px"
    }
    else if(e.code == "ArrowLeft"){
        distanciaDaEsquerda = distanciaDaEsquerda -10
        quadrado.style.left = distanciaDaEsquerda +"px"
    }
})

document.addEventListener("keydown", (e)=>{
    if(e.code == "ArrowUp"){
        distanciaDoTopo = distanciaDoTopo -10
        quadrado.style.top = distanciaDoTopo +"px"
    }
    else if(e.code == "ArrowDown"){
        distanciaDoTopo = distanciaDoTopo +10
        quadrado.style.top = distanciaDoTopo +"px"
    }
})


