function fibonacci(n) {
    let resultado = [0, 1];
    while (resultado[resultado.length - 1] < n) {
        resultado.push(resultado[resultado.length - 1] + resultado[resultado.length - 2]);
    }
    return resultado.filter(num => num <= n);
}

// Exemplo de uso:
console.log(fibonacci(10)); // Saída: [0, 1, 1, 2, 3, 5, 8]
