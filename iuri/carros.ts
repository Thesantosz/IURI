var leitor = require('readline-sync')

let novoCombustivel = [0]

class Carros {

    combustivel: number  //40L 
    gastoKm: number //16 km/L


    constructor(combustivel: number, gastoKm: number) {

        this.combustivel = combustivel
        this.gastoKm = gastoKm
    }


    andar(): void {

        let kms = leitor.question("Quantos km/h você percorreu?") //30km 

        if (kms > (this.combustivel * this.gastoKm)) {
            console.log(`Seu carro acabou a gasolina e percorreu apenas ${this.combustivel * this.gastoKm} km/h`)

            
            novoCombustivel.push(this.combustivel - ((this.combustivel * this.gastoKm)/ this.combustivel))
            novoCombustivel.shift()


        }
        else {
            console.log(`Seu carro percorreu ${kms} km/h.`)

            novoCombustivel.push(this.combustivel - ((this.combustivel * this.gastoKm)/ this.combustivel))
            novoCombustivel.shift()

        }


    }

    obterGasosa(): void {

        console.log(`Seu carro esta com ${this.combustivel} litros de combustivel.`)

    }

    adicionarGasosa(){

        let add = leitor.questionInt("Voce deseja abastecer quantos litros?")
        novoCombustivel.push(add + novoCombustivel)
        novoCombustivel.shift()

    }
}

    let novoCarro = new Carros(40, 16)

novoCarro.andar();

(){

    let escolha = leitor.question(`Escolha uma opção: `)
    let sair = true

    while(sair){

    switch(escolha){

        case "1" : 
        novoCarro.andar()
        break

        case "2":
        novoCarro.obterGasosa()
        break

        case '2':
        novoCarro.adicionarGasosa()
        break

        case '0':
        sair = false
    }


}
}


