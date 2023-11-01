let elementoH1 = document.querySelector("h1")
console.log(elementoH1)
console.log(elementoH1.innerText)

let elementoMain = document.querySelector("main")
console.log(elementoMain)
console.log(elementoMain.innerText)
console.log(elementoMain.innerHTML)

elementoH1.innerText = "Alterar elemento com JS"

elementoMain.innerHTML=`
<h2>Novo subtitulo</h2>
<ul>
    <li>Elemento de lista JS 1</li>
    <li>Elemento de lista JS 2</li>
    <li>Elemento de lista JS 3</li>
</ul>
`

