// parâmetros de função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(1,1));
console.log(soma(245,20));
console.log(soma(-500,60));

// parâmetros x argumentos

// ordem de parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade("Juliana", 40));

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3,3)));