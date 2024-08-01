export class Junior{
    public trabalhoJunior(){
        console.log('Júnior está resolvendo bugs')
    }
}

export class Senior{
    public trabalhoSenior(){
        console.log('O Senior esta criando novas features');
        
    }
}
export class Pleno{
    public trabalhoPleno(){
        console.log('O Pleno esta aadministrando as equipes');
        
    }
}

export class EmpresaDev{
    public funcionarios:(Junior | Senior | Pleno)[]

    constructor(){
        this.funcionarios = []
    }

    public contratarFuncionarios(funcionario: (Junior | Senior | Pleno)): void{
        this.funcionarios.push(funcionario)
    }

    public funcionamentoEmpresa(): void{
        console.log('Bom dia de trabalho a todos!!!')
        for(let funcionario of this.funcionarios){
            if(funcionario instanceof Junior){
                funcionario.trabalhoJunior()
            }else if (funcionario instanceof Senior){
                funcionario.trabalhoSenior()
            } else if(funcionario instanceof Pleno){
                funcionario.trabalhoPleno()
            }
        }
        
    }
}

let junior = new Junior()
let pleno = new Pleno()
let senior = new Senior()

let empresa = new EmpresaDev()

empresa.contratarFuncionarios(junior)
empresa.contratarFuncionarios(pleno)
empresa.contratarFuncionarios(senior)

empresa.funcionamentoEmpresa()