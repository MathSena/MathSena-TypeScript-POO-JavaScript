class Carro{
    private modelo:string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo:string, numeroDePortas:number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar():void{
        this.velocidade = this.velocidade+10
    }

    public parar():void{
        this.velocidade = 0
    }

    public velocidadeAtual():number{
        return this.velocidade
    }
    
}

let carroB = new Carro('Ferrari', 4)
console.log(carroB)
carroB.acelerar()