class Aluno
{
    nome: string

    constructor(public nome:string) 
    {
     this.nome = nome
     
    }
    exibir()
    {
        
        {
         console.log("Nome:" + this.nome)
        }
    }
}