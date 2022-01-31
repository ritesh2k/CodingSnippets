function factorialByRecursion(number) {
    if (number <= 1) return 1;
    return factorialByRecursion(number-1) * number
}


console.log('fact', factorialByRecursion(5));