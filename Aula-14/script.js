var issoEumaString = "Isso é uma String";
let issoEumNumero = 42;
const issoEumaboleana = true;
let issotbmEumaString ="42";

if (issoEumNumero === issotbmEumaString){
    console.log("As strings são iguais");
} else{
     console.log("As strings são diferentes");  
}


console.log(issoEumNumero + issotbmEumaString);

console.log (issoEumNumero + issoEumNumero);

var issoEumaGlobal =" Eu sou uma variável Global"; 

//declarando a variavel dentro de um bloco
{
    let issoEumaLocal ="Eu sou uma variável Local";
    console.log(issoEumaGlobal);
    console.log(issoEumaLocal);
}


console.log(issoEumaGlobal);
//console.log(issoEumaLocal); // Isso causa erro, pois issoEumaLocal não esta definido fora do bloco


let floatvalue1 = 0.06;

let floatvalue2 = 0.01;

let sum=  floatvalue1 + floatvalue2;

console.log(sum.toPrecision(2)) ; 

//imprimindo os numeros pares usando o For
for (let i = 0; i < 5; i++ ){
    console.log(i);
    console.log(i*2);
    console.log(i*2+1);
}

// Imprimindo os numeros impares usando While
let j= 0  
while (j <5){
    console.log(j*2+1);
    j++;
}


console.log (Math.PI);
console.log(Math.E);
console.log(Math.SQRT1_2);
console.log(Math.pow(2,3));
console.log(Math.random());
console.log(Math.cos(90));


// gerando os numeros primos de 0 a 100
function isPrime(num){
    if (num <=1) return false;
    for(let i =2; i <= Math.sqrt(num); i++){
        if (num % i ===0) return false
    }
    return true;
}

for (let i = 1;  i<= 100; i++){
  (isPrime(i)) ? console.log(i): null;
}
