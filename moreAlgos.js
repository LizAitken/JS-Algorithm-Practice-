// Anagram === True if two words can be rearranged to form the other word
// Input -> A string
// Does not have to be a legit word
// Output: (Integer) Find out how many changes you would need to make to make them an anagram

function anagramCount(string_input) {
    let newString = string_input.split('');
    let divided = (string_input.length)/2;
    let firstWord = newString.slice(0, divided);
    let secondWord = newString.slice(divided);

    string_input.length % 2 !== 0 ? -1 : null;
    let count = 0;
    let order = {};

    for (let i=0; i < firstWord.length; i++ ) {
        let letter = firstWord[i];
        order[letter] ? order[letter] += 1 : order[letter] = 1;
    }
    console.log(order);

    for (let i = 0; i < secondWord.length; i++) {
        let letter = secondWord[i];
        !order[letter] ? {} : order[letter] -= 1;
    }

    for (let key in order) {
        count +=order[key];
    }
    return count;
}  
console.log(anagramCount('xaxbbbxx'));


// Input will be a nested array
// Output will be the sum of the largest hourglass values
// Test case for negatives
let array1 = [[1, 1, 1, 0, 0, 0],[0, 1, 0, 0, 0, 0],[1, 1, 1, 0, 0, 0],[0, 0, 2, 4, 4, 0],[0, 0, 0, 2, 0, 0],[0, 0, 1, 2, 4, 0]];

function hourGlass(arr) {
    let hour_glass = [];

    if (typeof arr === "object" && arr.length === 6 && arr.map(num => num.length).reduce((p,n) => p + n) === 36) {
        for (let row = 0; row <=3; row++) {
            for (let col = 0; col <=3; col++) {
                let sum = 0;
                
                sum += arr[row][col];
                sum += arr[row][col + 1];
                sum += arr[row][col + 2];
                sum += arr[row + 1][col + 1];
                sum += arr[row + 2][col]; 
                sum += arr[row + 2][col + 1];
                sum += arr[row + 2][col + 2];
                
                hour_glass.push(sum);
            }
        }
    }
    return (hour_glass.length > 0) ? Math.max(...hour_glass) : 0;  
}
console.log(hourGlass(array1));




// Find the largest Number in a nested array
function largestNumber() {
    let arr = [[1, 1, 1, 0, 0, 0],[0, 1, 0, 0, 0, 0],[1, 1, 1, 0, 0, 0],[0, 0, 2, 4, 4, 0],[0, 0, 0, 2, 0, 0],[0, 0, 1, 2, 4, 0]];
    let newArr = [];
    arr.map(outer => {
        for (item in outer) {
            newArr.push(outer[item]);
        }
    })
    let count = 0;
    for(let i=0; i <= newArr.length; i++) {
        if (newArr[i] > count) {
            count = newArr[i];
        }
    }
    return count;
}
console.log(largestNumber());

// OR...

function largestNumber() {
    let arr = [[1, 1, 1, 0, 0, 0],[0, 1, 0, 0, 0, 0],[1, 1, 1, 0, 0, 0],[0, 0, 2, 4, 4, 0],[0, 0, 0, 2, 0, 0],[0, 0, 1, 2, 4, 0]];
    let newArr = [];
    arr.map(outer => {
        for (item in outer) {
            newArr.push(outer[item]);
        }
    })
    return Math.max(...newArr);
}
console.log(largestNumber());


function mostFrequent(user_input) {
    let letters = {};
    let count = 1;
    let highest = null;
    
    for (let val of user_input) {
        if (letters[val]) {
            letters[val] +=1;
        } else {
            letters[val] = 1;
        }
        letters[val] > count ? count = letters[val] : null;
        letters[val] === count ? highest = val : null;
    }
    return highest;
}
console.log(mostFrequent('hello bbboodddddddy'));

// Left rotation
// input should be the number and the index you want that number to be

function rotateLeft(arr, num) {
    let newNum;
    num > 5 ? newNum = Math.round(num % 5) : newNum = num;   
    let newArr = arr.concat(arr.splice(0, newNum));
    return newArr;
}
console.log(rotateLeft([1,2,3,4,5], 33));

// Return the number of pairs in the array
// Below function is incorrect 
// function findPairs(arr) {
//     let info = {};
//     let finalcount = 0;

//     for (let num of arr) {
//         if(info[num]) {
//             info[num] += 1;
//         } else {
//             info[num] = 1;
//         }
//         // console.log(info[num]);
//     }
//     console.log(info);
//     for (count in info) {
//         if (info[count] % 2 === 0) {
//             finalcount+=info[count];
//         }
//     }
//     return finalcount;
// }

function findPairs(arr) {
    let newArray = arr.sort();
    // Found the following function in order to properly sort 
    // Because with double digits, JS sort() sorts only the first number, ie: (1, 10, 2, 3)
    // arr.sort(function(a, b){
    //     return a - b;
    // });
    let count = 0;
    
    for(let i=0; i < newArray.length -1; i++)  {
        if(newArray[i] === newArray[i+1]) {
            count++;
            i++
        }
    }
    return count;

}
console.log(findPairs([10, 20, 20, 10, 10, 30, 50, 10, 20]));

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function minMaxSum(arr) {
    arr.sort(function(a, b){
        return a - b;
    });
    let minN = 0;
    let maxN = 0;
    for(let i=0; i< arr.length; i++) {
        if(i < arr.length - 1) {
            minN += arr[i];
        } 
        if(i >= arr.length - 4) {
            maxN += arr[i];
        }
    }  
    return (minN + ' ' + maxN);
}
console.log(minMaxSum([5, 6, 7, 8, 9]));


// Grades are from 0-100
// Failing grade = 40 or below
// round to the next multiple of 5 if the next multiple of 5 is less than 3
function roundGrades(grades) {
    let newGrades = [];
    for (number in grades) {
        if (grades[number] < 38) {
            newGrades.push(grades[number]);
        }
        else if (grades[number] % 5 === 0) {
            newGrades.push(grades[number]);
        }
        else if (grades[number] % 5 <= 3) {
           let remainder = grades[number] % 5;
           if ((grades[number] - remainder) % 2 === 0) {
               grades[number] = grades[number] - remainder;
            }
           else {
                grades[number] = (grades[number] - remainder) + 5;
           }
           newGrades.push(grades[number]);
        }
    }
    return newGrades;
}
console.log(roundGrades([22,23,38,58,50,67,65,61]));

// Mark & Toys
// Find how many numbers in the given array can add up to the number given
function howMany(arr, num) {
    arr.sort(function(a, b){
        return a - b;
    });
    let number = 0;
    let newArr = [];
    for(let i=0;i< arr.length; i++){
        if(arr[i] > number && num >= number) {
            number += arr[i];
            newArr.push(arr[i]);
        }
    }
    return newArr.length;   
}

howMany([1, 12, 5, 2, 111, 200, 1000, 10], 50);


