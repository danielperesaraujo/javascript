function carregar() {
    //  VARIÁVEIS   //
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 16

    //  TEXTO QUE MOSTRA AS HORAS   //
    msg.innerHTML = `Agora são ${hora} horas.`

    //  CONDIÇÕES   //
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#fbdcae'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#38b6ff'
    }else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#000735'
    }
}
