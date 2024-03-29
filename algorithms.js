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


// ----------JavaScript Meetup Challenge------------------------
// github: adyngom: 28 relevant js questions
// Coin problem: Figure out how many rolls of coins she has for each coin denomination
const coinsJar = [5, 10, 10, 25, 25, 25, 10, 5, 1, 1, 1, 25, 25];
const coinRoll = { "1": 2, "5": 2, "10": 2, "25": 2};

// Labeling the coins
const coinsLabels = {
    "1": "Pennies",
    "5": "Nickels",
    "10": "Dimes",
    "25": "Quarters"
};


// checking the sorting with coinsCount
const coinsCount = coinsJar.reduce(GroupBy, {});

const coinsInfo = Object.keys(coinsCount).map(key => {
    const totalCoins = coinsCount[key];
    const rollCount = coinRoll[key];
    const label = coinsLabels[key];

    const { quotient, remainder } = getQuotientRemainder(totalCoins, rollCount);
    const coinInfo = { label, quotient, remainder };

    return coinInfo;
});

console.log(coinsInfo);
// Point free composition-- using the map function a bit differently
console.log(coinsInfo.map(displayRollMessage).join(`\n`));

function groupBy(bag, coins) {
    // Sorting them by denomination
    !!bag[coins] ? (bag[coins] += 1) : (bag[coins] = 1);

    return {...bag};
}

function getQuotientRemainder(x,y) {
    if(!y) {
        // throw error here
    }
    return { quotient: parseInt(x/y), remainder: x % y };
}

function displayRollMessage(info) {
    const { label, quotient: rolls, remainder: left } = info;
    return `${label}: ${rolls} rolls - ${left} left`;
}

//-----------------JavaScript MeetUp Challenge------------------------
// Vending Machine Challenge
// Revealing module pattern--look up

let drinks = {
    1: { name: "mango", stock: 2},
    2: { name: "apple", stock: 2},
    3: { name: "fruit", stock: 1},
    4: { name: "pineapple", stock: 3}
};

let VM = function(inventory) {
    let drinks = inventory || null;

    if (!drinks) {
        // Note--Make sure you create descriptive Errors
        throw new Error("No inventory: Cannot add new vending machine.");
    }

    const drinksKeys = Object.keys(drinks);

    let sale = function(pid) {
        if (!drinks[pid]) {
            return;
        }

        if (drinks[pid].stock > 0) {
            drinks[pid].stock--;
            return `You bought 1 ${drinks[pid].name} - Thank you, come again!`;
        } else {
            drinks[pid].stock = 0;
            return `${drinks[pid].name} is out of stock`;
        }
    }
    let stock = function() {
        // Better data manipulation with reduce--lookup
        const total = drinksKeys.reduce((c,n) => c + drinks[n].stock, 0);
        return total;
        // Without arrow function
        // const total = drinksKeys.reduce(function(c,n) {
        //     return c + drinks[n].stock;
        // },0);
    }
    // To prevent being able to change the values
return Object.freeze({ sale, stock });
// To protect a class in a similar way: Object.freeze(MyClass.prototype)

};

const emptyVM = VM();

const vendingM = VM(drinks);

console.log(vendingM.sale(1));

// to call
vm.sale(1);

// Reverse a string
function reverseString(str) {
    let emptyStr = '';
    for (let i=str.length-1; i>=0; i--) {
        emptyStr+= str[i];
    }
    return emptyStr;
}
reverseString('Hello');

// Index of:
function indexOf(inputArray, inputItem) {
    const indexValue = inputArray.indexOf(inputItem);
    return indexValue;
}
indexOf([1,2,3,4], 3);

// Prime number
function isPrime(value) {
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
 } 

// Find longest Word
function findLongestWord(str) {
    let words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
        return longest.length;
    }
}

// OR...
function findLongestWord(str) {
    return str.split(" ").sort(function(a, b) {
        return b.length - a.length
    })[0];
}

// Make every word capitalized:
function titleCase(str) {
    let words= str.toLowerCase().split(" ");
    for (let i=0; i<words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);        
    } return words.join();
}

// OR
function titleCase(str) {
    let titled = str.toLowerCase().split(" ").map(function(elem) {
        return elem[0].toUpperCase() + elem.slice(1);
    })
    return titled.join(" ");
}


// Find the sum of the array
function findSum(arr) {
    let total = 0;
    for(i=0; i<=arr.length; i++) {
        total+=arr[i];
    }
    return total;
}

// Convert to military time
function timeConversion(s) {
    const arr = s.slice(0, 8).split(':');
    arr[0] = (s.indexOf('PM') > -1) ?
        (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
        (arr[0] == 12 ? '00' : arr[0]);
    return arr.join(':');
}


// Create a square
function printSquare(size) {
    for (let i = 0; i < size; i++) {
        stars = ''
        for (let i = 0; i < size; i++) {
            stars += '*';
        }
        console.log(stars)
    }
}

printSquare(5)

// FizzBuzz: 
// Through an array of numbers, if the number is divisible by 3, make it Fizz. If the number is divisible by 5, make it buzz. 
// If the number is divisible by 3 and 5, make it FizzBuzz
function fizzBuzz(arrOfNumbers) {
    for(let i = 0; i < arrOfNumbers.length; i++) {
        if(arrOfNumbers[i] % 3 === 0 && arrOfNumbers[i] % 5 === 0) {
            console.log('FizzBuzz');
        }
        if(arrOfNumbers[i] % 3 === 0 || arrOfNumbers[i] % 3 === 1 && arrOfNumbers[i] % 5 != 0 && arrOfNumbers[i] % 5 != 1) {
            console.log('Fizz');
        }
        if(arrOfNumbers[i] % 5 === 0 || arrOfNumbers[i] % 5 === 1 && arrOfNumbers[i] % 3 != 0 && arrOfNumbers[i] % 5 != 1) {
            console.log('Buzz');
        }
        else {
            console.log(arrOfNumbers[i]);
        }
    }
}
fizzBuzz([1, 3, 5, 15, 10, 22, 20]);

// merge two sorted arrays
function mergeArrays(a, b) {
    let newArray1 = a + ',' + b;
    let newArray = newArray1.sort();
    return newArray;
}
console.log(mergeArrays([1, 9, 10], [4, 2, 5, 7]));

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let largestNumber = 0;
    let countNumber = [];
    for (let i = 0; i <= ar.length; i++) {
        if (ar[i] > largestNumber) {
            largestNumber = ar[i];
        }
        if (largestNumber > ar[i]) {
            countNumber.push(largestNumber);
        }
    }
    return countNumber.length;
}