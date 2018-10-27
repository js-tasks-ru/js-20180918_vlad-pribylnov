'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {
    let minLength = 4;
    let checkOnSpace;

    for (let i = 0; i < name.length; i++) {
        checkOnSpace = name.charCodeAt(i);
        if (checkOnSpace === 32) break;
    }

    return !(name.length <= minLength || checkOnSpace === 32);
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print(`Welcome back, ${userName}!`);
    } else {
        print('Некорректное имя');
    }
}

sayHello();

