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

// Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive integer weights on a balance scale (left and right sides) and the second element being a list of available weights as positive integers. Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a comma separated string of the weights that were used from the list in ascending order, so for this example your program should return the string 2,6
//1-See if num in first array are equal..
//2- Grade the dif b/w the two and see which one is the lesser num
//3= Go to second array and cycle through numbers until the greater num in the second array is reached
function balanceNumbers(array) {
    let compareNumbers = Number(array[0]);
    let numbersList = Number(array[1]);
    return (compareNumbers[0] === compareNumbers[1]) ? 
        console.log('These numbers are already balanced!');
    

    }
}



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
 isPrime(21);