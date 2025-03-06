function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const txtano = document.getElementById('txtano')
    const section__img = document.getElementById('section__img')
        if(txtano.value.length === 0 || txtano.value > ano){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else{
            const fsex = document.getElementsByName('radsex')
            const idade = ano - Number(txtano.value)
            let genero = ''
            let img = document.createElement('img')
            img.setAttribute('id', 'foto')
            
            if(fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade < 10){
                    //Criança
                    img.setAttribute('src', './img/bebe menino.jpg')
                } else if(idade < 21){
                    //Jovem
                    img.setAttribute('src', './img/jovem menino.jpg')
                } else if(idade < 50){
                    //Adulto
                    img.setAttribute('src', './img/homem adulto.jpg')
                } else{
                    //Idoso
                    img.setAttribute('src', './img/idoso masculino.jpg')
                }
            } else if(fsex[1].checked){
                genero = 'Mulher'
                if(idade >= 0 && idade < 10){
                    //Criança
                    img.setAttribute('src', './img/bebe menina.jpg')
                } else if(idade < 21){
                    //Jovem
                    img.setAttribute('src', './img/jovem menina.jpg')
                } else if(idade < 50){
                    //Adulto
                    img.setAttribute('src', './img/mulher adulta.jpg')
                } else{
                    //Idoso
                    img.setAttribute('src', './img/idoso mulher.png')
                }
            }
            section__img.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            section__img.appendChild(img)

            //Configuração da imagem mostrada//
            
            img.style.width = '150px'
            img.style.height = '150px'
            img.style.borderRadius = '50%'
            img.style.display = 'block'
            img.style.margin = 'auto'
            img.style.marginTop = '1.5rem'

            
        }
}