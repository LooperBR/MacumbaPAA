//inicia o array que vai ser usado para testar a função
let novoarray = [4,5,6,7,3,12,1,5,4,21,67,7,2143,5,32,3,6,7,212,212536,5766]

//cria a função
function achar(array,valor){
    //itera o array inteiro
    for(i=0;i<array.length;i++){
        if(array[i]==valor){
            //quando acha o valor correto retorna a posição dele
            return i
        }
    }
    //retorna -1 se rodar o vetor inteiro e n achar o valor
    return -1
}

//acha o 7
console.log(achar(novoarray,7))
//procura um valor que não existe
console.log(achar(novoarray,1000000000))