function tabuada(){
    const txtn = document.getElementById('txtn')
    const seltab = document.getElementById('seltab')
    const res = document.getElementById('res')

    if(txtn.value.length == 0){
        alert('Por favor, digite um número!')
    }
    else{
        let n = Number(txtn.value)
        seltab.innerHTML = ''   //Limpa a tabuada antes de começar o cálculo. Sempre vem no começo para limpar antes de tudo.//
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option') // Cria um elemento option dinâmicamente no HTML.//
            item.text = `${n} x ${c} = ${n*c}` // .TEXT é a parte de dentro do option onde vai aparecer o resultado através dos cálculos depois de = //
            item.value = `tab${c}`
            seltab.appendChild(item) // Adiciona o item criado ao select para aparecer em tela.//
        }
    
        res.innerHTML = `Essa é a tabuada do número: <strong>${n}<strong/>`
    }
}