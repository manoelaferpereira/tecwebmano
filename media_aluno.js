function calcularMedia(){
nota1= parseFloat(document.getElementById("nota1").value); // inputs
nota2= parseFloat(document.getElementById("nota2").value);
nome= (document.getElementById("aluno").value);
media = (nota1 +nota2)/2; // calculo variavel de saída 

console.log(nota1);
console.log(media); // mostrar a varíavel de saída 

//para aprovação considere média  >= 7.0 

if(media >=7){
    alert ("O aluno " + nome + "obteve média ="+ media + "\n resultado:" + "aprovado");
}
else {
    alert ("O aluno " + nome + "obteve média "+ media +"\n resultado" + "reprovado")
}

}
////id é pra chamar a função 