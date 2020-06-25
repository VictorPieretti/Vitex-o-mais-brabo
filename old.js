function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
         var fsex = document.querySelectorAll('radsex')
         var idade = ano - Number(fano.value)
         var gênero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
             gênero = 'Homem'
         }else if (fsex[1].checked) {
             gênero = 'Mulher'
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
         }
    }