const $ = document.querySelector.bind(document);
const conteudoDasQuestoes = $('#conteudoDasQuestoes')
const pergunta = $("#pergunta")
const botoes = $('#botoes')
const botaoReiniciar = $('#reiniciar')
const conteudoDasRespostas = $('#conteudoDasRespostas')
const textoDoResultado = $('#textoDoResultado')
const textoPontuação = $('#pontuação')

//Criar uma lista de perguntas com suas respectivas respostas corretas.
const perguntas = [
    {
      pergunta: "Faça sua pergunta aqui",
      alternativas: [
        { alternativa: "Alternativa 1", correta: false },
        { alternativa: "Alternativa 2", correta: true },
        { alternativa: "Alternativa 3", correta: false },
        { alternativa: "Alternativa 4", correta: false }
      ]
    },
    // Adicione mais perguntas aqui
  ];


//Exibir o resultado final com a pontuação alcançada.
function apresentarResultado() {}

// Implementar a lógica para verificar se a resposta selecionada está correta.
function selecionarAlternativaCorreta(e) {
    
  // console.log(laternativaCerta) // pré definida
  
}

//Adicionar uma função para exibir as opções de resposta.
  function exibirPergunta(perguntaAtual){
    // console.log('perguntaAtual:',perguntaAtual.pergunta)

    perguntaAtual.alternativas.forEach(questao => { // pré definido
        const botao = document.createElement("button");// pré definido
          botao.classList.add("btn"); // pré definido
          // console.log(botao) // pré definido

        if (questao.correta) {// pré definido
            
        }
       botao.addEventListener('click', selecionarAlternativaCorreta)// pré definido

        

        // botao.innerText = 'texto no botão'; // pré  definido
        
        
        
      
    });
}
  // Implementar uma função para carregar a pergunta atual.
  function carregarPergunta() {
    
    // console.log(perguntaAtual);
    resetarEstado(); // pré definido
    
}

// Reiniciar Game
 function startGame() {

  // conteudoDasQuestoes.classList.remove("desativado");
  // conteudoDasRespostas.classList.add("desativado");
  // carregarPergunta()
  }
   
//botaoReiniciar.addEventListener("click", startGame);
    
carregarPergunta()


// bloco pré definido
function resetarEstado() {
    limparClasses(document.body);
    while (botoes.firstChild) {
      botoes.removeChild(botoes.firstChild);
    }
}
    
  function statusDasClasses(elemento, correta) {
    limparClasses(elemento);
    if (correta) {
      elemento.classList.add("correta");
    } else {
      elemento.classList.add("errada");
    }
}
  
  function limparClasses(elemento) {
    elemento.classList.remove("correto");
    elemento.classList.remove("errada");
}
// fechando bloco pré definido