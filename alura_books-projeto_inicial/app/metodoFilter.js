const botoes = document.querySelectorAll(".btn")
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livrosDisponivel() : categoriaDeLivro(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }

}
function categoriaDeLivro(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function livrosDisponivel() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponivel.innerHTML  =  `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">R$${valorTotal}</span></p>
  </div>
    `
}
