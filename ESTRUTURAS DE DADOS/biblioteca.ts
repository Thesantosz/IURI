let ask = require('readline-sync')

class PilhasdeLivros {
    
    public livros: string[] = []

    adicionarLivro(livro: string): void{

        this.livros.push(livro)
    }

    retirarLivro(): string | undefined{

        const livro = this.livros.pop()
    
        if(livro){
            console.log(`${livro} foi removido da biblioteca`)
        } else {
            console.log(`A biblioteca esta vazia `)
    }
    return 
    livro
}

    vazia(): boolean{

        return this.livros.length === 0
    }

    size(): number{

        return this.livros.length
    }

    getLivros(): void{
        console.log(this.livros)
    }
}

const novaPilha = new PilhasdeLivros()

        let loop = true

        while(loop){

            console.log(`                   
                        1. ADICIONAR LIVRO
                        2. REMOVER LIVRO
                        3. VER LIVROS
                        4. SAIR
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