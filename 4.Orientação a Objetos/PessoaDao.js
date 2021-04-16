"use strict";
exports.__esModule = true;
exports.PessoaDao = void 0;
var Pessoa_1 = require("./Pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('lógica delete');
        return new Pessoa_1["default"]('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new Pessoa_1["default"]('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [new Pessoa_1["default"]('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
