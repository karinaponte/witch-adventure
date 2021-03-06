function preload() { 
    imagemGameOver = loadImage("./img/assets/game-over.png");
    imagemPersonagem = loadImage("./img/personagem/correndo.png");
    imagemPersonagemMorta = loadImage("./img/personagem/morta.png");
    imagemInimigo = loadImage("./img/inimigos/gotinha.png");
    imagemInimigoTroll = loadImage("./img/inimigos/troll.png");
    imagemInimigoVoador = loadImage("./img/inimigos/gotinha-voadora-roxa.png");
    imagemInimigoLobo = loadImage("./img/inimigos/lobo.png");
    imagemTelaInicial = loadImage("./img/cenario/tela-inicial.png");
    imagemVida = loadImage("./img/assets/heart.png");
    fonteTelaInicial = loadFont("./img/assets/fonteTelaInicial.otf");
    config = loadJSON("./config/config.json");
    somDoJogo = loadSound("./sounds/trilha_jogo.mp3");
    somDoPulo = loadSound("./sounds/somPulo.wav");
    somDoDano = loadSound("./sounds/somDano.wav");
    
    somGameOver = loadSound("./sounds/somGameOver.mp3");


    for(let i = 1; i <= 5; i++) {
        imagemCenario.push(loadImage(`./img/cenario/floresta${i}.png`));
    }
}

