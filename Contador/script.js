function contar(){
    const ini = document.getElementById('txtini')
    const fim = document.getElementById('txtfim')
    const passo = document.getElementById('txtpasso')
    const res = document.getElementById('res')

    if(ini.value.length === 0 || fim.value.length === 0 || passo.value.length === 0){
        alert('[ERRO] Faltam dados!')
    }
    else{
        res.innerHTML = '<strong>Contando:<strong/> <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        // Aqui está funcionando com esse IF/ELSE, porém retirando os IF/ELSE e colocando 
        //apenas os DOIS FORs irá duncionanormalmente.//
            
        if(i < f){

            //Contagem crescente//

            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        else {

            //Contagem decrescente//

            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}