function carregar(){
    var msg = document.getElementById('horas')
    var img = document.getElementById('imagem')
    var hora = 19

    if (hora >= 0 && hora <= 12){
        msg.innerHTML = (`Agora são ${hora} horas`)
        img.src = 'manhã.jpg'
        document.body.style.background = 'lightblue'
    } else if(hora > 12 && hora <= 18){
        msg.innerHTML = (`Agora são ${hora} horas`)
        img.src = 'tarde.jpg'
        document.body.style.background = 'orange'
    } else {
        msg.innerHTML = (`Agora são ${hora} horas`)
        img.src = 'noite.jpg'
        document.body.style.background = 'gray'
    }
}



