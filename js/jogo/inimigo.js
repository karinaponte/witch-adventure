class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, precisaoColisao){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade);

        this.velocidade = velocidade;
        this.x = width;
        this.precisaoColisao = precisaoColisao;
    } 

    move() {
        this.x = this.x - this.velocidade;
    }

    aparece() {
        this.x = width;
    }
}