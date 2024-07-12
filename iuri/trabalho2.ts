    class Jogos{
        titulo: string
            genero: string
                classificacaoEtaria: number


constructor(titulo: string, genero: string, classificacaoEtaria: number){

     this.titulo = titulo
            this.genero = genero
                this.classificacaoEtaria =  classificacaoEtaria
}

    

getDetalhes(): void{

console.log(
    `Nome: ${this.titulo}${`\n`}
    Genero: ${this.genero}${`\n`}
    Classificacao: ${this.classificacaoEtaria}${`\n`}`
)

}
    }



/*Classe JogoEletronico: Crie uma classe JogoEletronico que herde de Jogo e adicione as seguintes propriedades e métodos:

Propriedades:
plataforma: string
Métodos:
super(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string)
Sobrescreva o método getDetalhes() para incluir a plataforma.
Classe JogoDeTabuleiro: Crie uma classe JogoDeTabuleiro que herde de Jogo e adicione as seguintes propriedades e métodos:

Propriedades:
numeroDeJogadores: number
Métodos:
super(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number)
Sobrescreva o método getDetalhes() para incluir o número de jogadores.
Encapsulamento:

Certifique-se de que todas as propriedades das classes sejam privadas e acessíveis apenas através de métodos públicos (getters e setters).
Abstração:

Crie uma classe abstrata Jogo que force a implementação do método getDetalhes() nas classes derivadas.
Comunicação Entre Classes:

Classe BibliotecaDeJogos: Crie uma classe BibliotecaDeJogos que gerencie uma coleção de jogos.
Propriedades:
jogos: Jogo[]
Métodos:
adicionarJogo(jogo: Jogo): void - Adiciona um jogo à biblioteca.
removerJogo(titulo: string): void - Remove um jogo pelo título.
listarJogos(): string - Retorna uma lista de detalhes de todos os jogos na biblioteca.
Tipagem:

Utilize tipagem explícita para todas as propriedades e métodos das classes.
Tarefas Específicas
Implementação das Classes:

Implemente todas as classes conforme os requisitos acima. Certifique-se de que cada classe esteja em seu próprio arquivo.
Instanciação e Uso das Classes:

Crie um arquivo principal (main.ts) onde você irá instanciar objetos das classes JogoEletronico, JogoDeTabuleiro e BibliotecaDeJogos.
Adicione alguns jogos eletrônicos e jogos de tabuleiro com diferentes características à biblioteca.
Mostre os detalhes de cada jogo na biblioteca usando o método listarJogos().
Teste das Funcionalidades:

Garanta que todos os métodos e propriedades funcionem conforme o esperado.
Teste a encapsulação, tentando acessar diretamente as propriedades privadas e verificando se ocorre um erro de compilação.
Teste a comunicação entre classes adicionando e removendo jogos da biblioteca.
