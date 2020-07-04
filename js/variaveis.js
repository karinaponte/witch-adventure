let imagemPersonagem;
let imagemInimigo;
let imagemInimigoTroll;
let imagemInimigoVoador;
let imagemGameOver;
let imagemTelaInicial;
let imagemVida;
let fonteTelaInicial;
let jogo;

let cenaAtual = "telaInicial";
let cenas;
let telaInicial;
let botaoGerenciador;

let somDoJogo;
let personagem;
let inimigo;
let inimigoTroll;
let inimigoVoador;
let somDoPulo;
let pontuacao;
let vida;
let config;

const matrizInimigo = new GeradorMatriz(104, 104, 4, 7).matriz; 
  
const matrizInimigoTroll = new GeradorMatriz(400, 400, 5, 6, 2).matriz;

const matrizInimigoVoador = new GeradorMatriz(200, 150, 3, 5, 2).matriz;

const matrizPersonagem = new GeradorMatriz(220, 270, 4, 4).matriz;

const inimigos = [];

const imagemCenario = [];

const cenario = [];