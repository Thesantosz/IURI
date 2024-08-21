/*a) Construtores sobrecarregados que permitam a inicialização do ponto:

i) Construtor padrão (sem parâmetros) na origem do plano 2D.

ii) Construtor com dois parâmetros `x` e `y` do tipo `number` para definir as coordenadas do ponto.

iii) Construtor que aceita outro objeto do tipo `Ponto2D` para criar um ponto com as mesmas coordenadas.

b) Métodos de acesso (getter/setter) para os atributos `x` e `y`.

c) Métodos sobrecarregados para movimentação do ponto com os mesmos parâmetros indicados para os construtores.


d) Método `equals(outroPonto: Ponto2D): boolean` para comparação semântica dos pontos.

e) Método `toString(): string` para representação do objeto como string.

f) Método `distancia(outroPonto: Ponto2D): number` para calcular a distância do ponto atual até outro ponto.
distancia(outroPonto: Ponto2D): void{
        let distanciaX = this.x - outroPonto.x


g) Método `clone(): Ponto2D` que cria e retorna uma cópia do ponto.
    let clonePonto = new Ponto2D(this.x, this.y)
    return clonePonto

    let pontoTres = pontoUm.clone()
## 3. Número Complexo
*/

let leitor = require('read-line');

export interface Ponto2d{

    constructor();
    constructor(x: number, y: number);
    constructor(outroPonto: Ponto2d);
    getX();
    getY();
    setX();
    setY();
    mover();
    comparação(outroPonto: Ponto2d): boolean;
    toString(): string;
    distancia();

}

export class Ponto2d implements Ponto2d{

    x: number
    y: number
    

    constructor(x: number, y: number){

        this.x = x
        this.y = y
    }

    getX(): Number{

        return
        this.x

    }

    getY(): number{

        return
        this.y
    }
}