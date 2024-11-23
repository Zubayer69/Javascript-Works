function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Ahmed Zubayer Rahman"));

function reverseAnotherString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseAnotherString("Ahmed Zubayer Rahman"));
