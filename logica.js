var media, n1, n2, n3, n4

function calcularMedia() {

n1 = document.getElementById("primeiraNota")

n2 = prompt ("Informe a nota do 2º bimestre: ")


n3 = prompt ("Informe a nota do 3º bimestre: ")


n4 = prompt ("Informe a nota do 4º bimestre: ")


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