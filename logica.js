var media, n1, n2, n3, n4

function calcularMedia() {

n1 = document.getElementById("primeiraNota")
    

n1 = document.getElementById("segundaNota")


n1 = document.getElementById("terceiraNota")


n1 = document.getElementById("quartaNota")


media = (n1 + n2 + n3 + n4) / 4

if ( media >= 7 ) {
    
    
    } else {
    
    if ( media <= 5 ) {
    document.write ("Reprovado");
    
    } else {
    
    document.write ("Recuperação");
    }}
}

calcularMedia()