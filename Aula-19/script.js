function calcular() {

    const diaNasc = parseInt(document.getElementById('diaNascimento').value);
    const mesNasc = parseInt(document.getElementById('mes').value);
    const anoNasc = parseInt(document.getElementById('ano').value);

    
    if (!diaNasc || isNaN(mesNasc) || !anoNasc) {
        alert('Por favor, digite o dia, mês e ano de nascimento.');
        return;
    }

    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth(); 
    const diaAtual = hoje.getDate();


    let idade = anoAtual - anoNasc;


    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idade--;
    }

    if (idade < 0) {
        alert("Você digitou uma data inválida!");
    } else {
        alert(`Sua idade é ${idade} anos.`);
    }
}