// Seleciona todos os botões e personagens
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

// Função para remover a classe 'selecionado' do botão atualmente selecionado
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

// Função para adicionar a classe 'selecionado' ao botão clicado
function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

// Função para remover a classe 'selecionado' do personagem atualmente visível
function desmarcarPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

// Função para exibir o personagem correspondente ao botão clicado
function mostrarPersonagem(indice) {
    personagens[indice].classList.add('selecionado');
}

// Função principal que adiciona os eventos de clique aos botões
function configurarEventosDosBotoes() {
    botoes.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            desmarcarBotaoSelecionado();
            marcarBotaoSelecionado(botao);

            desmarcarPersonagemSelecionado();
            mostrarPersonagem(indice);
        });
    });
}

// Inicializa a configuração dos eventos
configurarEventosDosBotoes();



