function carregar() {
    let msg = document.getElementById("mensagem");
    let foto = document.getElementById("foto");
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        foto.setAttribute("src", "imagens/manha.png");
        document.body.style.background = "#5882FA"

    } else if (hora >= 12 && hora < 18){
        foto.setAttribute("src", "imagens/tarde.png");
        document.body.style.background = "#F781F3"
        
    } else {
        foto.setAttribute("src", "imagens/noite.png");
        document.body.style.background = "#151515"
    }
}

