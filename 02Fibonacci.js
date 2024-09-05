function fibonacciSequence(num, a = 0, b = 1) {
    console.log(a)
    if (a === num) return `${num} pertence à sequência de Fibonacci.`
    if (b > num) return `${num} não pertence à sequência de Fibonacci.`
    return fibonacciSequence(num, b, a + b)
}
let numero = +process.argv[2];
console.log(fibonacciSequence(numero));