class Jogo {
    constructor(){
        this.indice = 0;
        this.mapa = config.mapa;
    }

    setup() {
        for(let i = 0; i < imagemCenario.length; i++) {
            cenario.push(new Cenario(imagemCenario[i], i * 2.5));
        }
        
        pontuacao = new Pontuacao();
        vida = new Vida(config.configuracoes.vidaMaxima, config.configuracoes.vidaInicial);   

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width -52, 30, 52, 52, 104, 104, 8, [16, 0, .7]);
        const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 8, [65, 50, .65]);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 5, [20, 2, .7]);
        const inimigoLobo = new Inimigo(matrizInimigoLobo, imagemInimigoLobo, width, -20, 240, 240, 480, 480, 5, [100, 120, .4]);
        
        inimigos.push(inimigo);
        inimigos.push(inimigoTroll);
        inimigos.push(inimigoVoador);
        inimigos.push(inimigoLobo);

        this.indice = 0;
    }

    keyPressed(key) {
        if(key == "ArrowUp") {
            personagem.pula();
            somDoPulo.play();
        }

        if(key == "Enter" && vida.vidas === 0) {
            this.setup();
            loop();
        }
    }

    draw() {
        for(let i = 0; i < imagemCenario.length; i++) {
            cenario[i].exibe();
            cenario[i].move();
        }

        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        
        inimigo.velocidade = linhaAtual.velocidade;
        
        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            
            if(this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        if(personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();
            somDoPulo.stop();
            somDoDano.play();
        
            if(vida.vidas === 0) {
                somDoJogo.stop();
                background("black");
                image(imagemGameOver, width/2 - 200, height/8);
                image(imagemPersonagemMorta, width/2 - imagemPersonagemMorta.width/2 - 75, height/2 - imagemPersonagemMorta.height/2 - 130);
                textFont('VT323');
                color("#ffffff");
                textSize(30);
                textAlign(CENTER);
                text("Pressione <ENTER> para tentar novamente", width/2, height/4 * 3);
                image(imagemCenario[4], 0, 0, width, height);
                somGameOver.play();
                noLoop();
            }
        }
    }
}