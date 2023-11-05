let titulojs = document.createElement("title")
titulojs.innerHTML = "Venda de livro"
titulojs.id = "titulo"
document.body.appendChild(titulojs)
console.log(titulojs)

let produto = document.createElement("h2")
produto.innerHTML = "Compre seu livro"
document.body.appendChild(produto)

let livro = document.createElement("section")
livro.innerHTML=
`<div id="nome">
    <h4>Livro X</h3>
</div>
<div id="descrição">
    O livro X conta a história de X, um homem X que vivia na cidade de X junto de seus X filhos e sua esposa x
</div>
<br>
<div id="preco">
    R$ 45,90
</div>
`
document.body.appendChild(livro)
