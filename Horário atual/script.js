function carregar(){
    const section__text = document.getElementsByClassName('section__text')
    const img = document.getElementById('img')
    const data = new Date()
    const hora = data.getHours()


    section__text[0].innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = './img/imagem manhã.jpg'
        document.body.style.backgroundColor = '#487592'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = './img/imagem tarde.jpg'
        document.body.style.backgroundColor = '#DE9F61'
    }else{
        //BOA NOITE
        img.src = './img/imagem noite.jpg'
        document.body.style.backgroundColor = '#1C161F'
    }
}