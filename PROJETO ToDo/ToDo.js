var ask = require('readline-sync');
var Tarefa = /** @class */ (function () {
    function Tarefa(descriçao, prioridade, status) {
        this.descriçao = descriçao;
        this.prioridade = prioridade;
        this.status = status;
    }
    return Tarefa;
}());
var FilaDeTarefas = /** @class */ (function () {
    function FilaDeTarefas() {
        this.ListaDeTarefas = [];
    }
    FilaDeTarefas.prototype.addTarefa = function (tarefa) {
        this.ListaDeTarefas.unshift(tarefa);
        console.log("Descri\u00E7\u00E3o da tarefa adicionada: ".concat(tarefa.descriçao));
    };
    FilaDeTarefas.prototype.removerTarefa = function () {
        if (this.estaVazia()) {
            console.log("Não tem tarefas disponiveis!!!!!!");
            return undefined;
        }
        else {
            return this.ListaDeTarefas.shift();
        }
    };
    FilaDeTarefas.prototype.estaVazia = function () {
        return this.ListaDeTarefas.length === 0;
    };
    FilaDeTarefas.prototype.listarTarefas = function () {
        if (this.estaVazia()) {
            console.log("Nenhuma tarefa na fila");
            return;
        }
        console.log("Tarefas na fila:");
        this.ListaDeTarefas.forEach(function (tarefa) {
            console.log("Descri\u00E7\u00E3o: ".concat(tarefa.descriçao, ", Prioridade: ").concat(tarefa.prioridade, ", Status: ").concat(tarefa.status));
        });
    };
    FilaDeTarefas.prototype.tarefaPronta = function () {
        if (this.estaVazia()) {
            console.log("Não há tarefas para serem concluídas");
            return;
        }
        var tarefa = this.ListaDeTarefas[0];
        tarefa.status = "Concluída";
        console.log("Tarefa conclu\u00EDda: ".concat(tarefa.descriçao));
    };
    FilaDeTarefas.prototype.tamanhoFila = function () {
        return this.ListaDeTarefas.length;
    };
    FilaDeTarefas.prototype.exibirMenu = function () {
        console.log(" \n        \n        ------------ TAREFAS -------------\n        \n        - 1. Adicionar Tarefa              \n        - 2. Remover Tarefa      \n        - 3. Listar Tarefas                       \n        - 4. Tamanho da Tarefa\n        - 5. Tarefas Prontas\n        - 6. Sair                     \n        -----------------------------------");
    };
    return FilaDeTarefas;
}());
function menu() {
    var Novafila = new FilaDeTarefas();
    var continuar = true;
    while (continuar) {
        Novafila.exibirMenu();
        var opcao = ask.questionInt("Escolha uma opção: ");
        switch (opcao) {
            case 1:
                console.clear();
                var addDescricao = ask.question("Descricao: ");
                var addPrioridade = ask.question("Prioridade: ");
                var addStatus = ask.question("Status: ");
                Novafila.addTarefa(new Tarefa(addDescricao, addPrioridade, addStatus));
                break;
            case 2:
                console.clear();
                var tarefaRemovida = Novafila.removerTarefa();
                if (tarefaRemovida) {
                    console.log("Tarefa removida: ".concat(tarefaRemovida.descriçao));
                }
                break;
            case 3:
                console.clear();
                Novafila.listarTarefas();
                break;
            case 4:
                console.clear();
                console.log("Tamanho da fila: ".concat(Novafila.tamanhoFila()));
                break;
            case 5:
                console.clear();
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
    ask.question("PRESSIONE ENTER PARA CONTINUAR...");
}
pressioneEnter();
menu();
