var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var leitor = require('readline-sync');
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.cumprimentar = function () {
        console.log("Meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade));
    };
    return Pessoa;
}());
var novaPessoa = new Pessoa("Leleo", 17);
var Criança = /** @class */ (function (_super) {
    __extends(Criança, _super);
    function Criança() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Criança.prototype.cumprimentar = function () {
        console.log("meu nome \u00E9 ".concat(this.nome, "e  tenho ").concat(this.idade, "."));
    };
    return Criança;
}(Pessoa));
var Adulto = /** @class */ (function (_super) {
    __extends(Adulto, _super);
    function Adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adulto.prototype.cumprimentar = function () {
        console.log("meu nome \u00E9 ".concat(this.nome, "e  tenho ").concat(this.idade, "."));
    };
    return Adulto;
}(Pessoa));
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idoso.prototype.cumprimentar = function () {
        console.log("meu nome \u00E9 ".concat(this.nome, "e  tenho ").concat(this.idade, "."));
    };
    return Idoso;
}(Pessoa));
var kid = new Criança("enzo", 6);
var adult = new Adulto("claudio", 32);
var odl = new Idoso("predi", 80);
kid.cumprimentar();
adult.cumprimentar();
odl.cumprimentar();
