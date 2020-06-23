let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage("./img/cenario/floresta.png");
  imagemPersonagem = loadImage("./img/personagem/correndo.png");
  somDoJogo = loadSound("./sounds/trilha_jogo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
}