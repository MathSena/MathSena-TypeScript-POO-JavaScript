class Carro {
    public modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string
    private listaDeCarros: Array<Carro> //poderá receber qualquer dado

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: Carro

    constructor(nome:string, carroPreferido:string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }
    public dizerNome():string {
        return this.nome
    }

    public dizerCarroPreferido():string{
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem():any{
        return this.carro
    }
}
/* --- cirar carros --- */
let carroA = new Carro('Ferrari', 4)
let carroB = new Carro('BMW', 3)
let carroC = new Carro('Aston Martin', 4)

/* --- montar a lista de carros da concessionaria ---*/
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Avenida Paulista', listaDeCarros)

/* --- exibir a lista de carros --- */
// console.log(concessionaria.mostrarListaDeCarros())

/* --- comprar o carro --- */
let cliente = new Pessoa('Matheus', 'Ferrari')
concessionaria.mostrarListaDeCarros().map((carro:Carro) => {
    if(cliente.dizerCarroPreferido() === carro.modelo) {
        console.log(`Cliente comprou o carro ${carro.modelo}`)
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())