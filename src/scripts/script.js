/** Haz una función que retorne un triangulo del tipo
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */
const square = () => {
    let exp = '';
    for (let i = 0; i < 7; i++) {
        exp += '#';
        console.log(exp);
    }
};

/** FizzBuzz Function */
/**
 * 
 * @param {Number} n 
 * @returns A side effect
 */
const fizzbuzz = (n) => {
    if (Number.isNaN(n)) return 'Ingrese un númera';
    if (n <= 0) return 'Ingrese un número mayor a cero';
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        }
        console.log(i);
    }
}

/** Chess Table Function */
/**
 * 
 * @param {Number} columns 
 * @param {Number} rows 
 */
const chessTable = (columns, rows) => {
    let str = '';
    let str2 = '';
    for (let x = 0; x < columns; x++) {
        str += '  # ';
        str2 += '#   ';
    }
    for (let y = 0; y < rows; y++) {
        console.log(str);
        console.log(str2)
    }
}

/** Minimun number */
/**
 * 
 * @param {Array} numbers 
 * @returns Min number of the array
 */
const min = (numbers) => {
    if (!numbers || numbers.length < 1) throw new Error('Invalid amount of numbers');
    let min = numbers[0];
    numbers.forEach(number => {
        if (!Number.isNaN(number)) throw new Error('Only Numbers');
        if (number < min) min = number;
        return false;
    })
    return min;
}

/** Pair number without % */
/**
 * 
 * @param {num} num 
 * @returns True or False 
 */
const isEven = (num) => {
    let number = String(num);
    let numberSplitted = [];
    if (num < 0) return false;
    if (num == 1) return false;
    if (num == 0) return true;
    if (number.length > 1) numberSplitted = number.split('');
    if (numberSplitted[numberSplitted.length - 1] != 0 || numberSplitted[numberSplitted.length - 1] != 1) {
        return isEven(num - 2);
    }
    if (numberSplitted[numberSplitted.length - 1] == 0) {
        return true;
    } else if (numberSplitted[numberSplitted.length - 1] == 1) {
        return false;
    }
}

/** Counting B's */
const contarBs = (word) => {
    const wordSplit = String(word).split('');
    let bCounter = 0;
    for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i] == "B" || wordSplit[i] == "b") {
            bCounter++
        }
    }
    return bCounter;
}

/** Counting any word */
/**
 * 
 * @param {String} word 
 * @param {String} character 
 * @returns Counting characters in a word.
 */
const contarCaracter = (word, character) => {
    const wordSplit = String(word).split('');
    let CharCounter = 0;
    for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i] == character.toLowerCase()) {
            CharCounter++
        }
    }
    return CharCounter;
}

/** Range function */
/**
 * 
 * @param {Number} start 
 * @param {Number} end 
 * @param {Number} step 
 * @returns Return an array with all the numbers between start and end. Including the end.
 */
const range = (start, end, step) => {
    let count = start;
    let range = [];
    if(step == 0 || step == undefined || step == null) step = 1;
    if(step < 0) {
        for (count; count >= end; count = count + step) {
            range.push(count);
        }
    }
    if(step > 0) {
        for (count; count <= end; step ? count = count + step : count ++) {
            range.push(count);
        }
    }
    return range;
}
/**
 * 
 * @param {Number} numbers 
 * @returns The sum of all of numbers of the array.
 */
const sum = (numbers) => {
    let accumalator = 0;
    for (let i = 0; i < numbers.length; i++) {
        accumalator += numbers[i]
    }
    return accumalator;
}

/**Reverse array with & without mutation */
/**
 * 
 * @param {Array} array 
 * @returns A new array with the content of the input reversed.
 */
const reverseArray = (array) => {
    let reverseArray = [];
    for(let i = array.length - 1; i >= 0; i--){
        reverseArray.push(array[i]);
    }
    return reverseArray;
}
/**
 * 
 * @param {Array} array 
 * @returns 
 */

const reverseArrayInPlace = (array) => {
    const length = array.length - 1;
    for(let i = array.length - 1; i >= 0; i--){
        array.push(array[i]);
    }
    for(let k = 0;  k <= length; k++){
        array.shift();
    }
    console.log(array);
}
// reverse ArrayInPlace is slower, testing with 5 elements array.

/** */

export {
    square
}