let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoTroll;
let imagemInimigoVoador;
let imagemGameOver;

let cenario;
let somDoJogo;
let personagem;
let inimigo;
let inimigoTroll;
let inimigoVoador;
let somDoPulo;
let pontuacao;

const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]

const matrizInimigoTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

const inimigos = [];

function preload() {
  imagemCenario = loadImage("./img/cenario/floresta.png");
  imagemGameOver = loadImage("./img/assets/game-over.png");
  imagemPersonagem = loadImage("./img/personagem/correndo.png");
  imagemInimigo = loadImage("./img/inimigos/gotinha.png");
  imagemInimigoTroll = loadImage("./img/inimigos/troll.png");
  imagemInimigoVoador = loadImage("./img/inimigos/gotinha-voadora-roxa.png");
  somDoJogo = loadSound("./sounds/trilha_jogo.mp3");
  somDoPulo = loadSound("./sounds/somPulo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width -52, 30, 52, 52, 104, 104, 8, 200);
  const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 8, 2500);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 5, 700);
  
  inimigos.push(inimigo);
  inimigos.push(inimigoTroll);
  inimigos.push(inimigoVoador);

  frameRate(40);
  somDoJogo.loop();
}

function keyPressed() {
  if(key == "ArrowUp") {
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
    if(personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 200, height/3)
      noLoop();
    }
  })
  
}