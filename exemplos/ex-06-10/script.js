const produtos = [
  { nome: "Produto A", preco: 10.0 },
  { nome: "Produto B", preco: 20.0 },
  { nome: "Produto C", preco: 30.0 },
]


// const produtosNull = null

function exibirProdutos(produtos) {
    console.log(produtos)
}

produtos && exibirProdutos(produtos)
