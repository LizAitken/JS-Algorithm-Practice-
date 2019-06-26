//Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.--coderbyte
function factorial(num) { 
    let number = 1;
    for (let count = 1; count <= num; count++) {
        number = number * count;
    }
    return number; 
};

console.log(factorial(5));
//Answer: 120

// write a function called power which accepts a base and an exponent,the function should return
// the power of the base to the exponent
// 2 to the power of 4 = 2*2*2*2

function power(base, exponent) {
    if (exponent === 1) {
        return base;
    }
    return base * (power(base,exponent -1));
}
console.log(power(4, 5));

// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. - coderbyte
function ReverseString(str) {
    let newString = '';
    for(i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(ReverseString('Hello, my name is Liz'));