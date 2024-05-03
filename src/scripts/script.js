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
    for(let i = 0; i < 7; i++) {
    exp += '#';
    console.log(exp);
    }
};

/** FizzBuzz Function */
const fizzbuzz = (n) => {
    if(Number.isNaN(n)) return 'Ingrese un númera';
    if(n <= 0) return 'Ingrese un número mayor a cero';
    for(let i = 0; i< n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }else if(i % 5 === 0) {
            console.log('Buzz');
        }else if(i % 3 === 0){
            console.log('Fizz');
        }
        console.log(i);
    }
}

/** Chess Table Function */
const chessTable = () => {
    let str = '';
    let str2 = '';
    for(let x = 0; x < 4; x++){
        str += ' # ';
        str2 += '# ';
    }
    for(let y = 0; y < 8; y++){
        console.log(str);
        console.log(str2)
    }
}

export {
    square
}