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

class Data{

    dia : number
    mes: Number
    ano: number

    dataUm : string
    dataDois : string

    outradata : string

    constructor(outradata: string, dataUm: string, dataDois: string, dia: number, mes: number, ano: number){

        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.dataUm = dataUm
        this.dataDois = dataDois
        this.outradata = outradata
        
        
    }

    comparar(outraData: Data): void{

        if(outraData.dataDois === this.dataDois){

            console.log('As datas são iguas')
        }

        else{
            console.log('As datas são diferentes')
        }
    
    }

    getDia(): Number{

    return this.dia
    }

    getMes(): Number{

        return this.mes
    }

    getExtenso(){

    return console.log("")
}


}

let novaData = new Data('02/04/2013', '30/01/2008', '20/04/2023', 3, 4, 2000 )

novaData.comparar('30/01/2008')

/*
let novaData = new Data('22/04/2020', '17/03/2018')
let outraData = new Data ('03/07/2002', '04/05/03')

novaData.comparar(outraData)*/




