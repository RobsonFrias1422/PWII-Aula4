class Viagem 
{
constructor(public TempoGasto: number, velocidadeMedia: number, rendimentoVeiculo: number)
{


}
    distancia(): number
{ 
        return (this.tempoGasto * this.velocidadeMedia)
    }
}

consumo(): number
{
    return (this.distancia() / this.rendimentoVeiculo)
    }
}
