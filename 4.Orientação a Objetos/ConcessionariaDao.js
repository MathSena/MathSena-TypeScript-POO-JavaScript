"use strict";
exports.__esModule = true;
exports.ConcessionariaDao = void 0;
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('lógica delete');
        return new Concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new Concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [new Concessionaria_1["default"]('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
