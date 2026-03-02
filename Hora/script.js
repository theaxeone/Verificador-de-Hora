function carregar () {
    var dv = document.querySelector ('div#msg')
    var img = document.getElementById ('img')
    var date = new Date ()
    var hora = date.getHours ()
    dv.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 6 && hora < 12) {
        document.body.style.background = '#ffc43f'
        img.src = 'fotomanhã.png'
    } else if (hora >= 12 && hora < 18){
        document.body.style.background = '#ffc18c'
        img.src = 'fototarde.png'
    } else {
        document.body.style.background = '#191970'
        img.src = 'fotonoite.png'
    }
}