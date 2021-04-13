var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/* --- cirar carros --- */
var carroA = new Carro('Ferrari', 4);
var carroB = new Carro('BMW', 3);
var carroC = new Carro('Aston Martin', 4);
/* --- montar a lista de carros da concessionaria ---*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Avenida Paulista', listaDeCarros);
/* --- exibir a lista de carros --- */
// console.log(concessionaria.mostrarListaDeCarros())
/* --- comprar o carro --- */
var cliente = new Pessoa('Matheus', 'Ferrari');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (cliente.dizerCarroPreferido() === carro.modelo) {
        console.log("Cliente comprou o carro " + carro.modelo);
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
