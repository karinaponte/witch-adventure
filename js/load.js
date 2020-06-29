function preload() {
    imagemCenario = loadImage("./img/cenario/floresta.png");
    imagemGameOver = loadImage("./img/assets/game-over.png");
    imagemPersonagem = loadImage("./img/personagem/correndo.png");
    imagemInimigo = loadImage("./img/inimigos/gotinha.png");
    imagemInimigoTroll = loadImage("./img/inimigos/troll.png");
    imagemInimigoVoador = loadImage("./img/inimigos/gotinha-voadora-roxa.png");
    imagemTelaInicial = loadImage("./img/cenario/tela-inicial.png");
    fonteTelaInicial = loadFont("./img/assets/fonteTelaInicial.otf");

    somDoJogo = loadSound("./sounds/trilha_jogo.mp3");
    somDoPulo = loadSound("./sounds/somPulo.mp3");
}