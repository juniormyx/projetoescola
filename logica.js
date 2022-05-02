function calcularMedia() {

    var n1 = parseInt(document.getElementById("primeiraNota").value)
    var n2 = parseInt(document.getElementById("segundaNota").value)
    var n3 = parseInt(document.getElementById("terceiraNota").value)
    var n4 = parseInt(document.getElementById("quartaNota").value)

    var media = parseFloat((n1 + n2 + n3 + n4) / 4)

    if (media >= 7) {
        document.write('Aluno Aprovado!')
    }
    else {
        document.write('Aluno Reprovado!')
    }

}

calcularMedia()