let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarSub(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens"
  valorSubtotal.innerText = subtotalInfo.valor
}

// ------------------------ Variaveis / dados ------------------------
let btnAdicionarProduto01 = document.querySelector("#btn-adicionar-produto-01")
let quantidadeProduto01 = document.querySelector("#quantidade-produto-01")
let btnRemoverProduto01 = document.querySelector("#btn-subtrair-produto-01")

// ------------------------ Função ------------------------
function adicionarUm(item){
  quantidadeProduto01.value = Number(quantidadeProduto01.value)+1
  subtotalInfo.quantidade = subtotalInfo.quantidade+1
  atualizarSub()
}

function removerUm(item){
  quantidadeProduto01.value = Number(quantidadeProduto01.value)-1
  subtotalInfo.quantidade = subtotalInfo.quantidade-1
  atualizarSub()
}

// ------------------------ Eventos ------------------------
btnAdicionarProduto01.addEventListener('click', adicionarUm)
btnRemoverProduto01.addEventListener('click', removerUm)

quantidadeSubtotal.innerText =subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

