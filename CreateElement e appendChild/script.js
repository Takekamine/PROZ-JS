let elementoJavaScript = document.createElement("li")
elementoJavaScript.innerHTML = "JavaScript"
elementoJavaScript.id = "ling-js"
let listaLinguagens = document.querySelector(".lista-linguagens")
listaLinguagens.appendChild(elementoJavaScript)

const postagemJavaScript = document.createElement("div")
postagemJavaScript.innerHTML=
`<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
JavaScript é a principal linguagem de programação do lado do cliente
</p>`
const postagens = document.querySelector(".postagens")
postagens.appendChild(postagemJavaScript)

