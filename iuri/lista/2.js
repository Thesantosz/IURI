/*### Questão 2 - Calendário Mágico

Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta
classe deverá dispor dos seguintes métodos:

```typescript
interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): number;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): string;
    getAno(): number;
    isBissexto(): boolean;
    clone(): Data;
}
```*/
var Data = /** @class */ (function () {
    function Data(dataUm, dataDois, dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dataUm = dataUm;
        this.dataDois = dataDois;
    }
    Data.prototype.comparar = function (outraData) {
        if (this.dataUm === this.dataDois) {
            console.log('As datas são iguas');
        }
        else {
            console.log('As datas são diferentes');
        }
    };
    Data.prototype.getDia = function () {
        return this.dia;
    };
    Data.prototype.getMes = function () {
        return this.mes;
    };
    Data.prototype.getExtenso = function () {
        return console.log("");
    };
    return Data;
}());
var novaData = new Data('2020', '2018', 1, 3, 2007);
/*
let novaData = new Data('22/04/2020', '17/03/2018')
let outraData = new Data ('03/07/2002', '04/05/03')

novaData.comparar(outraData)*/
