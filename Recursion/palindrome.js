function palindromByRecursion(string) {
    if (string.length <= 1) return true;

    if (string.slice(0, 1) === string.slice(-1)) return palindromByRecursion(string.slice(1, string.length - 1));

    return false;
}

console.log('palindromByRecursion', palindromByRecursion('saippuakivikauppia'));
