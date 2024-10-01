let ask = require('readline-sync');

class Tarefa{

    constructor(descrição: string, prioridade: string, status: string){ }
    }

class FilaDeTarefas{

    public ListaDeTarefas: Tarefa[] = [] 

    addTarefa(tarefa: Tarefa): void{
    this.ListaDeTarefas.push(tarefa)
    }

    removerTarefa(): Tarefa | undefined{
            if(this.estaVazia()){
                console.log("Não tem tarefas disponiveis!!!!!!")
                return undefined
            } else{
                return  this.ListaDeTarefas.shift()
            }
        }

    estaVazia(): boolean{
        return this.ListaDeTarefas.length === 0
    }

    listarTarefas():{

    }






}

