import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

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