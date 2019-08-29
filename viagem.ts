class Viagem 
{
     constructor(public TempoGasto: number, public velocidadeMedia: number, public rendimentoVeiculo: number)
    {

    }
    distancia(): number
    { 
        return (this.TempoGasto * this.velocidadeMedia)
    };

    consumo(): number
    {
        return (this.distancia() / this.rendimentoVeiculo)    
    };
}

