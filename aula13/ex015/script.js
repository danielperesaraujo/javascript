function verificar() {
    var data = new Date() // DATA ATUAL
    var ano = data.getFullYear() //PARA PEGAR O ANO ATUAL
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    //VALIDAÇÃO ANO E SEXO
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados informados!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //GENERO HOMEM
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'crianca homem.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'adolescente homem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso homem.png')
            }

        //GENERO MULHER
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'crianca mulher.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'adolescente mulher.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}