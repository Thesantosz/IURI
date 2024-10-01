let ask = require('readline-sync');

class Tarefa {

    constructor(public descriçao: string, public prioridade: string, public status: string) { }
}

class FilaDeTarefas {

    public ListaDeTarefas: Tarefa[] = []

    addTarefa(tarefa: Tarefa): void {

        this.ListaDeTarefas.unshift(tarefa)

        console.log(`Descrição da tarefa adicionada: ${tarefa.descriçao}`);
    }

    removerTarefa(): Tarefa | undefined {

        if (this.estaVazia()) {
            console.log("Não tem tarefas disponiveis!!!!!!")
            return undefined
        }
        else {
            return this.ListaDeTarefas.shift()
        }
    }

    estaVazia(): boolean {

        return this.ListaDeTarefas.length === 0
    }

    listarTarefas(): void {

        if (this.estaVazia()) {
            console.log("Nenhuma tarefa na fila");
            return
        }

        console.log("Tarefas na fila:");

        this.ListaDeTarefas.forEach(tarefa => {
            console.log(`Descrição: ${tarefa.descriçao}, Prioridade: ${tarefa.prioridade}, Status: ${tarefa.status}`);
        });
    }


    public tarefaPronta(): void {

        if (this.estaVazia()) {
            console.log("Não há tarefas para serem concluídas");
            return;
        }

        const tarefa = this.ListaDeTarefas[0]

        tarefa.status = "Concluída";
        console.log(`Tarefa concluída: ${tarefa.descriçao}`);
    }


    public tamanhoFila(): number {
        return this.ListaDeTarefas.length;
    }


    public exibirMenu(): void {
        console.log(`\ 
        
        ------------ TAREFAS -------------
        
        - 1. Adicionar Tarefa              
        - 2. Remover Tarefa      
        - 3. Listar Tarefas                       
        - 4. Tamanho da Tarefa
        - 5. Tarefas Prontas
        - 6. Sair                     
        -----------------------------------`);
    }
}


function menu() {
    const Novafila = new FilaDeTarefas();
    let continuar = true;

    while (continuar) {

        Novafila.exibirMenu();
        const opcao = ask.questionInt("Escolha uma opção: ");

        switch (opcao) {
            case 1:
                console.clear()
                const addDescricao = ask.question("Descricao: ");
                const addPrioridade = ask.question("Prioridade: ");
                const addStatus = ask.question("Status: ");

                Novafila.addTarefa(new Tarefa(addDescricao, addPrioridade, addStatus));
                break;
            case 2:
                console.clear()
                const tarefaRemovida = Novafila.removerTarefa();
                if (tarefaRemovida) {
                    console.log(`Tarefa removida: ${tarefaRemovida.descriçao}`);
                }
                break;
            case 3:
                console.clear()
                Novafila.listarTarefas();
                break;
            case 4:
                console.clear()
                console.log(`Tamanho da fila: ${Novafila.tamanhoFila()}`);
                break;
            case 5:
                console.clear()
                Novafila.tarefaPronta();
                break;
            case 6:
                continuar = false;
                console.log("Saindo...");
                break;
            default:
                console.log("Opcao invalida! Tente novamente.");
                break;
        }
    }
}
function pressioneEnter() {
    ask.question("PRESSIONE ENTER PARA CONTINUAR...")
}

pressioneEnter()
menu();
