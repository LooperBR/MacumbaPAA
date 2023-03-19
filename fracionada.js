//declara peso maximo e os objetos com os quais estamos trabalhando
var pesoMaximo = 50
var objetos = [
    {peso:10,valor:20},
    {peso:20,valor:40},
    {peso:35,valor:25},
    {peso:25,valor:35},
    
]

//para cada objeto faz a proporção de valor para peso
objetos.forEach((value,index,array)=>{
    objetos[index].ratio=value.valor/value.peso
})
//console.log(objetos)

//ordena pela proporção
objetos.sort((a,b)=>{
    return b.ratio-a.ratio
})


console.log(objetos)

//funcao que distribui os elementos na mochila
function mochilaFracionadaDoDemonio(pesoMaximo,objetos){
    let i=0
    let valor_total=0
    let final = []
    //enquanto não estourar o peso maximo ou usar todos os elementos
    while(pesoMaximo>0 && i<objetos.length){
        //se o objeto tiver menos que o peso maximo insere ele inteiro
        if(objetos[i].peso<=pesoMaximo){
            valor_total+=objetos[i].valor
            pesoMaximo-=objetos[i].peso
            final.push([i,1])
        }else{
            //se o objeto tiver mais que o peso maximo insere o maior valor possivel
            let porcentagem = pesoMaximo/objetos[i].peso
            valor_total+=objetos[i].valor * porcentagem
            pesoMaximo=0
            final.push([i,porcentagem])
        }
        i++
    }
    //printa o valor total e a distribuição
    console.log(valor_total)
    console.log(final)
}

mochilaFracionadaDoDemonio(pesoMaximo,objetos)