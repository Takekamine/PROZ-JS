let linkProz = document.getElementById("link-proz")
let btnSubmit = document.querySelector("button[type=submit]")

linkProz.addEventListener("click", (e)=>{
    e.preventDefault()
    alert("Não foi possível acessar o link")
})

btnSubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    alert("Não foi possível enviar o formulário")
})