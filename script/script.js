function testes(){

   
} 

function carregarCatalogo(){
    
    const livros = [
        { imagem: 'icons/image/livro1.jpg', titulo: 'Harry Potter e a Pedra Filosofal' },
        { imagem: 'icons/image/livro2.jpg', titulo: 'Harry Potter e a Câmara Secreta' },
        { imagem: 'icons/image/livro3.jpg', titulo: 'Harry Potter e o Prisioneiro de Azkaban' },
        { imagem: 'icons/image/livro4.jpg', titulo: 'Harry Potter e o Cálice de Fogo' },
        { imagem: 'icons/image/livro5.jpg', titulo: 'Harry Potter e a Ordem da Fênix' },  
        { imagem: 'icons/image/livro6.jpg', titulo: 'Harry Potter e o Enigma do Príncipe' },  
       
    ];

    for (let i = 0; i < livros.length; i++) {
        document.getElementById('catalogo').innerHTML += `
        <div class="livro">
            <img src="${livros[i].imagem}" alt="Livro ${i + 1}" class="livro-img">
            <h4>${livros[i].titulo}</h4>

            <button>
                Adicionar
                <img src="icons/plus.svg" alt="">
            </button>
        </div>
        `;
    }
}
carregarCatalogo();


function carregarFilmes() {  
    
    const filmes = [
        { imagem: 'icons/image/filme1.jpg', titulo: 'Marighella' },
        { imagem: 'icons/image/filme2.jpg', titulo: 'Minha Mãe É uma Peça 3' },
        { imagem: 'icons/image/filme3.jpg', titulo: 'Alemão' },
        { imagem: 'icons/image/filme4.jpg', titulo: 'Uma Família Feliz' },
        { imagem: 'icons/image/filme5.jpg', titulo: 'Meu Passado Me Condena' },
        { imagem: 'icons/image/filme6.jpg', titulo: 'Medida Provisória' },
    ];

    for (let i = 0; i < filmes.length; i++) {
        document.getElementById('filmes').innerHTML += `  <!-- Alterado de catalogo para filmes -->
        <div class="filme">  <!-- Alterado de .livro para .filme -->
            <img src="${filmes[i].imagem}" alt="Filme ${i + 1}" class="filme-img">  <!-- Alterado de .livro-img para .filme-img -->
            <h4>${filmes[i].titulo}</h4>

            <button>
                Assistir
                <img src="icons/plus.svg" alt="">
            </button>
        </div>
        `;
    }
}



carregarFilmes();  




let indiceAtual = 0;

function exibirSlide(indice) {
  const carrossel = document.querySelector('.meu-carrossel');
  const totalItens = document.querySelectorAll('.meu-carrossel-item').length;
  
  if (indice >= totalItens) {
    indiceAtual = 0;
  } else if (indice < 0) {
    indiceAtual = totalItens - 1;
  } else {
    indiceAtual = indice;
  }
  
  const deslocamento = -indiceAtual * 100;
  carrossel.style.transform = `translateX(${deslocamento}%)`;
}

function mostrarSlideProximo() {
  exibirSlide(indiceAtual + 1);
}

function mostrarSlideAnterior() {
  exibirSlide(indiceAtual - 1);
}

