function adicao(a,b){
    return a+b;
}

function subtracao(a,b){
    return a-b;
}

function multiplicacao(a,b){
    return a*b;
}

function divisao(a,b){
    if(b === 0){
        return "O valor nao pode ser dividido por ZERO!"
    }

    return a/b;
}

function numPar(a){
    if (a % 2 == 0){
        return `${a} é par!`
    }
    else{
        return `${a} não é PAR!`
    }
}

function sumIntervalo(a,b){
    let sum=0;
    for (let i= a; i <= b; i++) {
        sum+=i;
    }

    return sum;
}

function fatorial(a){
    let mult = 1;
    for (let i= a; i > 1; i--) {
        mult*=i;
    }
    return mult;
}

function contarVogais(a){
    let cont=0;
    for (const x of a) {
        if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U"){
            cont+=1;
        }
    }

    return `A palavra "${a}" tem ${cont} vogais!`
}

console.log(adicao(2,2));
console.log(subtracao(4,2));
console.log(multiplicacao(2,2));
console.log(divisao(10,2));
console.log(numPar(5));
console.log(sumIntervalo(1,5));
console.log(fatorial(5));
console.log(contarVogais("HEITOR"));
