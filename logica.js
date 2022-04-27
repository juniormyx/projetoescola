var media, n1, n2, n3, n4

function calcularMedia(prompt) {
n1 = prompt ("Informe a nota do 1º bimestre: ")
n1 = eval(n1)

n2 = prompt ("Informe a nota do 2º bimestre: ")
n2 = eval(n2)

n3 = prompt ("Informe a nota do 3º bimestre: ")
n3 = eval(n3)

n4 = prompt ("Informe a nota do 4º bimestre: ")
n4 = eval(n4)

media = (n1 + n2 + n3 + n4) / 4

if ( media >= 7 ) {
    document.write ("Aprovado");
    
    } else {
    
    if ( media <= 5 ) {
    document.write ("Reprovado");
    
    } else {
    
    document.write ("Recuperação");
    }}
}

calcularMedia()