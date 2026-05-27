function calculadora() {

    let anoNascimento=document.getElementById("anoNascimento").value
   
    let anoAtual= new Date().getFullYear();
  
    let idade= anoAtual- anoNascimento;

    if(anoNascimento==0){
        alert("Digite um ano valido")
        return
            }
            document.getElementById("resultado").innerHTML="Sua idade : " + idade

}