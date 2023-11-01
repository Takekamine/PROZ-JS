let elementoH1 = document.getElementById("titulo")
elementoH1.innerText = "Conteúdo adicionado"

let elementoA = document.querySelector("a")
elementoA.innerText = "Site Proz"

let elementoOL = document.getElementById("lista-ordenada")
elementoOL.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
`

let elementoUl = document.querySelector("ul")
elementoUl.innerHTML = `
<li><a href="https://prozeducacao.com.br">Site 1</a></li>
<li><a href="https://www.google.com.br/">Site 2</a></li>
<li><a href="https://www.youtube.com/?hl=pt&gl=BR">Site 3</a></li>
`

