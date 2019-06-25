//Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
function factorial(num) { 
    let number = 1;
    for (let count = 1; count <= num; count++) {
        number = number * count;
    }
    return number; 
};
factorial(5);