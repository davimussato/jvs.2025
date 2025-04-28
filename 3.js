function verificarPrimo(num) {
    if (num <= 1) return "Não é primo";
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return "Não é primo";
    }
    return "É primo";
}

// Exemplo de uso:
console.log(verificarPrimo(7)); // Saída: "É primo"
