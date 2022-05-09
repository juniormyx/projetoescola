function esconderResult() {
    document.getElementById("result").style.visibility = 'hidden';
    document.getElementById("result").style.visibility = 'visible';

}

function calcularMedia() {

    var n1 = Number(document.getElementById("primeiraNota").value)
    var n2 = Number(document.getElementById("segundaNota").value)
    var n3 = Number(document.getElementById("terceiraNota").value)
    var n4 = Number(document.getElementById("quartaNota").value)
    
    media = Number((n1 + n2 + n3 + n4) / 4)
    
    document.getElementById("result").innerText = media
    
}

calcularMedia()