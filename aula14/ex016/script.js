function contar() {
    
    //   ---   PRIMEIRO PASSO SEPARAR AS VARIÁVEIS   ---   //

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //   ---   VALIDAR SE OS DADOS QUE O USUÁRIO DIGITOU SÃO VÁLIDOS   ---   //
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossével contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        //   ---   CONVERTER OS VALORES DE INI;FIM;PASSO EM NÚMEROS   ---   //
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        //   ---   REPETIÇÃO UTILIZANDO O FOR   ---   //
        if (i < f) {
            for(let c = i; c < f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}