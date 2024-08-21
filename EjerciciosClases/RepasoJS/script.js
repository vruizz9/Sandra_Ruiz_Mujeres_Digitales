function parImpar(num) {
    let message;
    if (num % 2 == 0) {
        message = 'es un número par';
    } else {
        message = 'es un número impar';
    }
    return message;
}
console.log(parImpar(64))

function cicloFor() {
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            suma += i;
        }
    }
    return suma;
}
console.log(cicloFor())

