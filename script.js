
let imagem = document.querySelector('#imagem');

let body = document.querySelector('#filmes');

// Filtros de categoria
let filtroGenero = document.querySelector('#filtroGenero');
let filtroClassificacao = document.querySelector('#filtroClassificacao');
let filtroPopularidade = document.querySelector('#filtroPopularidade');
let filtroLancamento = document.querySelector('#filtroLancamento');


let imgFilmes = [
   '<img src = "imgsfilmes/romance/titanic.jpg.jpg" >',
   '<img src = "imgsfilmes/romance/orgepreco.jpg" >',
  '<img src = "imgsfilmes/acao/veloefurio.webp">',
  '<img src = "imgsfilmes/acao/johnwick.jpg.jpg">',
  '<img src = "imgsfilmes/terror/coraline.jpg.jpg">',
  '<img src = "imgsfilmes/terror/jogosmortais.jpg.jpg">',
  '<img src = "imgsfilmes/ficcaocientifica/bladerunner.jpg.jpg">',
  '<img src = "imgsfilmes/comedia/tdmundoempani.jpg.jpg">'
  
]

// Lista de filmes com diferentes atributos (popularidade, ano, etc)
const filmes = [
   { titulo: "Titanic", genero: "romance", classificacao: "12", popularidade: "alta", lancamento: 1997, img: imgFilmes[0] },
   { titulo: "Orgulho e preconceito", genero: "romance", classificacao: "L", popularidade: "media", lancamento: 2005, img: imgFilmes[1] },
   { titulo: "Velozes e furiosos 5", genero: "acao", classificacao: "14", popularidade: "alta", lancamento: 2011, img: imgFilmes[2]},
   { titulo: "John Wick", genero: "acao", classificacao: "16", popularidade: "alta", lancamento: 2014, img:imgFilmes[3] },
   { titulo: "Coraline", genero: "terror", classificacao: "10", popularidade: "media", lancamento: 2009, img: imgFilmes[4] },
   { titulo: "Jogos mortais", genero: "terror", classificacao: "18", popularidade: "alta", lancamento: 2023, img:imgFilmes[5] },
   { titulo: "Blade Runner", genero: "sciFi", classificacao: "14", popularidade: "media", lancamento: 1982, img: imgFilmes[6] },
   { titulo: "Todo mundo em pânico", genero: "comedia", classificacao: "16", popularidade: "baixa", lancamento: 2000, img: imgFilmes[7] }
];

function filtraFilmes() {
    // Pega os valores selecionados nos filtros
    let generoSelecionado = filtroGenero.value;
    let classificacaoSelecionada = filtroClassificacao.value;
    let popularidadeSelecionada = filtroPopularidade.value;
    let lancamentoSelecionado = filtroLancamento.value;

    // Filtra os filmes de acordo com os filtros selecionados
    const filmesFiltrados = filmes.filter(filme => {
        // Filtro por Gênero
        let generoValido = (generoSelecionado === "todos" || filme.genero === generoSelecionado);

        // Filtro por Classificação
        let classificacaoValida = (classificacaoSelecionada === "todos" || filme.classificacao === classificacaoSelecionada);

        // Filtro por Popularidade
        let popularidadeValida = (popularidadeSelecionada === "todos" || filme.popularidade === popularidadeSelecionada);

        // Filtro por Data de Lançamento
        let lancamentoValido = (lancamentoSelecionado === "todos" ||
            (lancamentoSelecionado === "antes2010" && filme.lancamento < 2010) ||
            (lancamentoSelecionado === "2010-2020" && filme.lancamento >= 2010 && filme.lancamento <= 2020) ||
            (lancamentoSelecionado === "depois2020" && filme.lancamento > 2020)
        );

        // Retorna verdadeiro se o filme passar por todos os filtros
        return generoValido && classificacaoValida && popularidadeValida && lancamentoValido;
    });

    // Exibe os filmes filtrados
    exibeFilmes(filmesFiltrados);
}

function exibeFilmes(filmes) {
    // Limpa os filmes exibidos anteriormente
    body.innerHTML = '';

    // Cria e exibe os filmes filtrados
    filmes.forEach(filme => {
        let novoFilme = document.createElement('div');
        novoFilme.classList.add('filme');
        novoFilme.innerHTML = filme.img;
        body.appendChild(novoFilme);
    });
}

// Adiciona os ouvintes de evento para todos os filtros
filtroGenero.addEventListener('change', filtraFilmes);
filtroClassificacao.addEventListener('change', filtraFilmes);
filtroPopularidade.addEventListener('change', filtraFilmes);
filtroLancamento.addEventListener('change', filtraFilmes);

// Inicializa exibindo todos os filmes ao carregar a página
exibeFilmes(filmes);
