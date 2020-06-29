class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }
    
    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textSize(100);
        text("Witch", width/2 - textWidth("Witch")/2, height/3);
        textSize(50);
        text("Adventure", width/2 - textWidth("Adventure")/2, height/5*2.2);    
    }

    _botao() {
        botaoGerenciador.y = height/7*5;
        botaoGerenciador.draw();
    }
}