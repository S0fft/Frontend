"use strict"

// Типы данных -----------

// undefined
let name0;
console.log (name0);
console.log (typeof name0);

// null
let name1 = null;
console.log (name1);
console.log (typeof name1);

// Boolean
let name2 = 20 > 18;
console.log (name2);
console.log (typeof name2);

// Number -------------------
let name3 = 33; // 33.33
console.log (name3);
console.log (typeof name3);

// Infinity
let name31 = 33 / 0;
console.log (name31);
console.log (typeof name31);

// Nan
let name32 = 'Строка' / 2;
console.log (name32);
console.log (typeof name32);
// ---------------------------


// BigInt
let name4 = 123456789012345678901234567890n;
console.log (name4);
console.log (typeof name4);

// String -------------------
let name5 = 'Строка с текстом';
console.log (name5);
console.log (typeof name5);

// String+Var
let name5num = 18;
let name51 = `Возраст: ${name5num}`;
console.log (name51);
console.log (typeof name51);
// -------------------------

// Object
let name6 = {
    one: "1Один",
    two: "2Два"
}
console.log (name6);
console.log (typeof name6);

// SymboL
let id = Symbol("id");
console.log (id);
console.log (typeof id);

// Function 
let funcVarible = function name(params) {
    // Код функции
}
console.log(typeof funcVarible);

console.log ('Всего 9 тпов данных')

// ----------------------------------------

// Преобразование типов данных-------------

// number - string
let numbb = 5;
console.log (numbb);
console.log (typeof numbb);

// Переобразование:
numbb = String(numbb)
console.log (numbb);
console.log (typeof numbb);

// boOlean - number (Любое значние - true, пустота - folse. 0 - пустота "0"- строка)
let name7 = true;
console.log (name7);
console.log (typeof name7);

// Переобразование:
name7 = Number(name7);
console.log (name7);
console.log (typeof name7);
// Обртано
name7 = Boolean(name7);
console.log (name7);
console.log (typeof name7);

// string - number
let name8 = 'Привет'
console.log (name8);
console.log (typeof name8);
// Переобразование:
name8 = Number(name8);
console.log (name8); // NaN
console.log (typeof name8);

// ----------------------------\








