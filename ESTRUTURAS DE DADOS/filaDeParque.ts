export class FilaDeParque{
    private pessoas: string[] = []

    public entrarNaFila(nome: string): void{
        this.pessoas.unshift(nome)
        //insere no início do vetor, ao invés do final
    }

    public atender(): string | undefined{
        if(this.estaVazia()){
            console.log("A fila está vazia!")
            return undefined
        }
        return this.pessoas.pop()
        //retira do fim do vetor
    }

    public proximaNaFila(): string | undefined{
        if(this.estaVazia()){
            console.log("A fila está vazia!")
            return undefined
        }
        return this.pessoas[this.pessoas.length - 1]
    }

    public estaVazia(): boolean{
        return this.pessoas.length === 0
    }

    public tamanho(): number{
        return this.pessoas.length
    }
}

let novaFila = new FilaDeParque()

let loop = true

while(loop){

    console.log(`                   
                1. ENTRAR NA FILA
                2. ATENDER
                3. PROXIMA NA FILA
                4. VER SE ESTA VAZIA
                5. TAMANHO DA FILA
                6. SAIR
                `);
    
    let pergunta = ask.question('ESCOLHA UMA OPÇÃO: ')

switch(pergunta){
    case '1': 
    let pergunta = ask.question('Que livro deseja adicionar: ')
    novaPilha.adicionarLivro(pergunta)
    limparTela()
    break
    case "2": 
    novaPilha.retirarLivro()
    break
    case '3':
        novaPilha.getLivros()
    break            
    case '4':
        loop = false
    break
    default: console.log('ESTA OPÇAO NÃO ESTA DISPONIVEL')
}}

function limparTela(){
    ask.question(`pressione ENTER para sair...`)
    console.clear()
}