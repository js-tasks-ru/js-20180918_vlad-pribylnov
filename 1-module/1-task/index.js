'use strict';

/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

let number = prompt('Введите число', '');
let powerOf = prompt('Введите степень', '');

let pow = (m, n) => {
    let x = m;

    for (n;n > 1;n--) {
        m *= x;
    }

    return m;
};

if (number >= 1 && powerOf >= 1) {
    alert('Число ' + number + ' в степени ' + powerOf + ' = ' +  pow(+number, +powerOf));
}  else {
    alert('Степенью может быть только целое число не меньше 1')
}

