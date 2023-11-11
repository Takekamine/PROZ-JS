let div = document.querySelector("#styleComDOM")
div.style.color = "blue"
div.style.color = "" //remover valor
div.style.fontSize="16px"

let div2 = document.querySelector(".borda-azul")
let incluiClasse = div2.classList.contains("borda-azul") //verifica se existe a classe borda-azul
console.log(incluiClasse)

div2.classList.add("texto-novo") //adciona nova classe

div2.classList.remove("borda-azul") //remove classe

div2.classList.toggle("borda-azul")//ativa ou desativa a classe
