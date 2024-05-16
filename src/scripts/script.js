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
const chessTable = (columns, rows ) => {
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

export {
    square
}