var leitor = require('readline-sync');
var novoCombustivel = [0];
var Carros = /** @class */ (function () {
    function Carros(combustivel, gastoKm) {
        this.combustivel = combustivel;
        this.gastoKm = gastoKm;
    }
    Carros.prototype.andar = function () {
        var kms = leitor.question("Quantos km/h você percorreu?"); //30km 
        if (kms > (this.combustivel * this.gastoKm)) {
            console.log("Seu carro acabou a gasolina e percorreu apenas ".concat(this.combustivel * this.gastoKm, " km/h"));
            novoCombustivel.push(this.combustivel - ((this.combustivel * this.gastoKm) / this.combustivel));
            novoCombustivel.shift();
        }
        else {
            console.log("Seu carro percorreu ".concat(kms, " km/h."));
            novoCombustivel.push(this.combustivel - ((this.combustivel * this.gastoKm) / this.combustivel));
            novoCombustivel.shift();
        }
    };
    Carros.prototype.obterGasosa = function () {
        console.log("Seu carro esta com ".concat(this.combustivel, " litros de combustivel."));
    };
    return Carros;
}());
var novoCarro = new Carros(40, 16);
novoCarro.andar();
