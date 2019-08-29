var Viagem = /** @class */ (function () {
    function Viagem(TempoGasto, velocidadeMedia, rendimentoVeiculo) {
        this.TempoGasto = TempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.rendimentoVeiculo = rendimentoVeiculo;
    }
    Viagem.prototype.distancia = function () {
        return (this.TempoGasto * this.velocidadeMedia);
    };
    ;
    Viagem.prototype.consumo = function () {
        return (this.distancia() / this.rendimentoVeiculo);
    };
    ;
    return Viagem;
}());
