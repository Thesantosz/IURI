let reader = require('readline-sync')

export interface Contador{

    constructor(contagem: Array<number>);
     zerar(): void;
     imcrementar(): void;
     descrementar(): void
     valor();
 
 }

 export class Contador implements Contador{

    public contagem: number[] 

    constructor(contagem: number[] ){

        this.contagem = [1, 2, 3, 4, 5, 6]
    }

    zerar(): void{

        this.contagem = []
    }

    imcrementar(): void{

        console.log(this.contagem.push(this.contagem.length + 1))
    }

    descrementar(): void{

        this.contagem.pop()
        console.log(this.contagem)
    }

    valor(){
        console.log(this.contagem.length);
    }

 }

let NovoContador = new Contador([1, 2, 3, 4, 5, 6])

NovoContador.imcrementar();
NovoContador.zerar();
NovoContador.descrementar();
NovoContador.valor



