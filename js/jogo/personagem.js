class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 6;
        this.alturaDoPulo = -50;
        this.pulos = 0;
        this.invencivel = false;
    }

    pula() {
        if(this.pulos < 2) {
        this.velocidadeDoPulo = this.alturaDoPulo;
        this.pulos++;
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if(this.y > this.yInicial) {
            this.y = this.yInicial;
            this.pulos = 0;
        }
    }

    tornarInvencivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false
        }, 1000)
    }

    estaColidindo(inimigo) {
        if(this.invencivel) {
            return false;
        } 
        
        const precisao = .7;
        
        if(isDebug) {
            noFill();
            stroke("red");
            strokeWeight(5)
            rect(
                this.x + 20,
                this.y + 40,
                this.largura * precisao,
                this.altura * precisao
            );

            rect(
                inimigo.x + inimigo.precisaoColisao[0],
                inimigo.y + inimigo.precisaoColisao[1],
                inimigo.largura * inimigo.precisaoColisao[2],
                inimigo.altura * inimigo.precisaoColisao[2]
            );
        }    

        const colisao = collideRectRect(
            this.x + 20,
            this.y + 40,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.x + inimigo.precisaoColisao[0],
            inimigo.y + inimigo.precisaoColisao[1],
            inimigo.largura * inimigo.precisaoColisao[2],
            inimigo.altura * inimigo.precisaoColisao[2]
        );


        return colisao;
    }
}