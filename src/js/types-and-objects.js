// Symbols - a symbol is a unique and immutable data type and may be
// used as an identifier for object properties

let eventSymbol = Symbol('resize event'); // new unique symbol will be created
// there is no way to check how does the identifier looks like
// 'resize event' string is used for debbuging 
console.log(typeof eventSymbol); // symbol 
console.log(eventSymbol.toString()); // Symbol(resize event)

let s = Symbol('event');
let s2 = Symbol('event');
console.log(s === s2); // false

let s3 = Symbol.for('event'); // symbol registry - to get access we use symbol.for()
// if we already have 'event' that will be returned otherwise new symbol will be created

let s4 = Symbol.for('symbol');
let s5 = Symbol.for('symbol');
console.log(s4 === s5); // true

let description = Symbol.keyFor(s4);
console.log(description); // symbol - we allways get human redable string


// Object

let a = { x: 1 }, b = {  y: 2 };

Object.setPrototypeOf(a, b);
console.log(a.y);

let target = {};
Object.assign(target, a, b);
console.log(target);

let x = { a: 1 }, y = {  a: 2, b: 5 };

Object.defineProperty(b, 'c', {
    value: 10,
    enumerable: false
});

let target2 = {};
Object.assign(target2, x, y);
console.log(target2); // {a:2, b:5} - object y overwrite object x

let value = NaN, amount = 0, total = -0;
console.log(value === value); // false
console.log(Object.is(value, value)); // true
console.log(amount === total); // true
console.log(Object.is(amount, total)); // false



// String extensions
let title = 'Santa Barbara Surf Riders';

console.log(title.startsWith('Santa')); // true
console.log(title.endsWith('Rider')); // false
console.log(title.includes('ba')); // true

let title2 = 'Surfet\'s \u{1f3c4} Blog'; // astral symbols
console.log(title2);


// Number extensions

console.log(Number.parseInt === parseInt); // true - new static method parseinte was added to Number
console.log(Number.parseFloat === parseFloat); 
// parseInt/parseFloat are placed in global scope

let num = 'NaN', num2 = '8000';
console.log(isNaN(s)); // true - it converts num to number
console.log(Number.isNaN(s)); // false becuase it is a string
console.log(isFinite(s)); // true - it converts num to number
console.log(Number.isFinite(s)); // false becuase it is a string
console.log(Number.isInteger(undefined)); // false - albo NaN, Infinity



// RegExp
let pattern = 'pattern';
pattern.text('value');


// Function extension
let fn = function() {
    return 0;
}

console.log(fn.name); // fn (function is anonymus)

let newFn = fn;
console.log(newFn.name); // fn

// Function.name ins't writable but it's configurable with Object.defineProperty()