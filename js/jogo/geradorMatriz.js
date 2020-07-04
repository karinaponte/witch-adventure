class GeradorMatriz {
    constructor(largura, altura, totalFramesLinha, totalFramesColuna, ignorarFrames = 0){
        const matrizGerada = [];
        for(let x = 0; x < totalFramesColuna; x++) {
            for(let y = 0; y < totalFramesLinha; y++){
                matrizGerada.push([largura * y, altura * x]);
            }
        }
         
        for(let i = 0; i < ignorarFrames; i++) {
            matrizGerada.pop();
        }

        this.matriz = matrizGerada;
    }
}