//declara peso maximo e os objetos com os quais estamos trabalhando
var pesoMaximo = 50
var objetos = [
    {peso:10,valor:20},
    {peso:20,valor:40},
    {peso:35,valor:25},
    {peso:25,valor:35}
]

//função que retorna todos os subconjuntos de um conjunto com os elementos de 0 até n-1 com n sendo o numero de objetos
function geraSubconjuntos(tam,subconjunto,i){
    //caso base: chegou no final da array
    if(i>=tam){
        return subconjunto
    }
    let tamanho = subconjunto.length
    //para cada item ja existente no subconjunto insere um novo elemento que adiciona o i no final dele
    for(let j=0;j<tamanho;j++){
        let novo_subconjunto = subconjunto[j].slice(0)
        novo_subconjunto.push(i)
        subconjunto.push(novo_subconjunto)
    }
    //insere no subconjunto o item i
    subconjunto.push([i])
    //chama a função denovo com i= i+1
    return geraSubconjuntos(tam,subconjunto,i+1)
}
let tam = objetos.length
let subconjuntos = geraSubconjuntos(tam,[],0)

let maiorValor=0;
let maiorConjunto=-1;
let valorAtual=0;
let PesoAtual=0;
//para cada subconjunto
for(let i=0;i<subconjuntos.length;i++){
    valorAtual=0;
    PesoAtual=0;
    //para cada elemento do subconjunto
    for(let j=0;j<subconjuntos[i].length;j++){
        PesoAtual+=objetos[subconjuntos[i][j]].peso
        valorAtual+=objetos[subconjuntos[i][j]].valor
        //se o peso estourar ignora o subconjunto
        if(PesoAtual>pesoMaximo){
            valorAtual=-1
            break
        }
    }
    //se o valor desse subconjunto for maior pega ele como maior
    if(valorAtual>maiorValor){
        maiorValor = valorAtual
        maiorConjunto = i
    }
}
//printa o resultado
console.log(subconjuntos[maiorConjunto])
for(let i=0;i<subconjuntos[maiorConjunto].length;i++){
    console.log(objetos[subconjuntos[maiorConjunto][i]])
}