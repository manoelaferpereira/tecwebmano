function Novamedia(){
    let nome
    let nota1 =parseFloat(document.getElementById("nota1").value)// inputs
    let nota2 =parseFloat(document.getElementById("nota2").value) // inputs 
    let Novam =parseFloat(document.getElementById("novamedia").value) //inputs 

    media = (nota1+nota2)/2;

    if(media>=7){
      document.getElementById("resultado").innerHTML = "O aluno "+nome+ "obteve média ="+ media+""

    }else{
        alert("você não atingiu a média ,porém ainda à chances \n insira a nota da recuperação ");
        let media2= (rec+media)/2;

        if(media2>=5){
            getComputedStyle.getElementById("resultado").innerHTML="O aluno" +"obteve média"+media+"\n resultado"+"Aprovado"
                
        }else{
            document.getElementById("resultado").innerHTML = "O aluno "+ "obteve média" + media+"\n resultado :"+"Reprovado "

        }
        function exibeResultado(nome,media,status){
            document.getElementById("resultado").innerHTML = "O aluno " + nome + "obteve média " + media.tofixed(2) + "\nresultado" +status;
            
        }

    }
}
//select :função para realizar a função para o usuario selecionar. 
//input type: inserir um informações .
// label name: Inserir o nome na página.
//quando o laço é maior,maior é o tempo de processamento,por isso utilizar o swit case.
