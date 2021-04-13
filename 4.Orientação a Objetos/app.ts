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

class Concessionaria{
    private endereco:string
    private listaDeCarros:any /**Qualquer tipo de dado */

    constructor(endereco:string){
        this.endereco = this.endereco
    }
    public fornecerEndereco():string{
        return this.endereco
    }

    public mostrarListaDeCarro():any{
        return this.listaDeCarros
    }
}

class Pessoa{
    private nome:string
    private carroPreferido:string
    private carro:any

    constructor(nome:string, carroPreferido:string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome():string{
        return this.nome
    }

    public dizerCarroPreferido():string{
        return this.carroPreferido
    }

    public comprarCarro(carro:any):void{
         this.carro = carro
    }

    public dizerCarroQueTem():any{
        return this.carro
    }
}

let carroB = new Carro('Ferrari', 4)
console.log(carroB)
carroB.acelerar()
console.log(carroB)
carroB.acelerar()

let concessionariaA = new Concessionaria('Avenida Paulista')
console.log(concessionariaA.fornecerEndereco())

let pessoaA = new Pessoa('Matheus', 'Jeep Renegade')
console.log(pessoaA.dizerCarroPreferido())