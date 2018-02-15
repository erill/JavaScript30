// let, const and Block Scoping

console.log(productId, a); // undefinde, undefined

let productId = 12; // no hoisting when we use the let keyword
const a = 13;

let id = 1;
{
    let id = 16; // bolck scoping
}
console.log('id', id); // 1

{
    let id2 = 2;
}
// console.log(id2); // reference error



// Temporal Dead Zone - the time span between the creation of a variable’s binding and its declaration
// The variable is in a “temporal dead zone” from the start of the block until the initialization is processed.
function updateId() {
    id3 = 12;
}
let id3 = null;
updateId();
console.log('id3: ', id3); // 12

const ID = 100; // read-only 
// const ID; // unexpected token -> Const must be initialized
console.log(ID);



// Default Function Params
var getTotal = function(price, tax = price * 0.07) {
    console.log('arguments count: ', arguments.length); // 1 - referst to arguments passed to a function
    console.log(price + tax);
}
getTotal(5.00); // 5.35

var baseTax = 0.07;
var getTotal2 = function(price, tax = price * baseTax) {
    console.log(price + tax);
}
getTotal2(5.00); // 5.35

var generateBaseTax = () => 0.07;
var getTotal3 = function(price, tax = price * generateBaseTax()) {
    console.log(price + tax);
}
getTotal3(5.00); // 5.35

// price and adjustment are in the same scope
// adjustment is declared after price, so price doesnt see the value od adjustment 
var getTotal4 = function(price = adjustment, adjustment = 100) { 
    console.log(price + adjustment);
}
getTotal4(); // undefinde + 100 = NaN
getTotal4(5.00); // 105

// Dynamicly created function
var getTotal5 = new Function("price = 20", "return price;");
console.log(getTotal5());



// Rest and Spread
// rest refers to garhering params and putting them into single array
// spred  refers to spreading out (rozkładać) the elements of teh array

console.log('Rest ans Spread');

var showCategories = function(productId, ...categories) { // ... == Rest
    console.log(categories instanceof Array); // true
    console.log(categories);
}
showCategories(123, 'search', 'advertising'); // ['search', 'advertising']
showCategories(123); // []
showCategories.length; // 1 

var prices = [12, 20, 18];
var maxPrice = Math.max(...prices); // spread operator - he divide array on 3 single elements
console.log('max: ', maxPrice); 

var newPriceArray = [...prices]; // [12, 20, 18] - prices array is divided and then assigned to new array 

var newArrayWithEmptyElements = Array(...[,,]); // [undefined, undefined] - the default value is undefined, and also JS asumes that after last , is nothing

var maxCode = Math.max(..."4321"); // 4 - spread also works on strings



//Object Literals Extensions
console.log('Object Literals Extensions');

var name = 'John', surname = 'Nowak';
// we dont have to specify the same string twice, we can list it once
var user = {
    name,
    surname,
    // we no longer have to specify function keyword
    fullName() {
        return this.name + ' ' +  this.surname;
    },
    "full name"() {
        return this.name + ' ' +  this.surname;
    }
};

console.log(user); // {name: "John", surname: "Nowka"}
console.log(user.fullName());
console.log(user['full name']());



// For ... of loops 
var categories = ['hardware', 'software', 'vaporware'];
for (var item of categories) {
    console.log(item); 
} // hardware software vaporware

var categories2 = [,,];
for (var item of categories2) {
    console.log(item); 
} // undefined undefined

var codes = "ABCDE";
var count = 0;
for (var code in codes) {
    count++;
}

console.log(count); // 5 - we can also iterate over the string




// Octal and Binary Literals
var value = 0o10; // 8 
var value = 0O010; // 8
var value = 0b10; // 2
var value = 0B10; // 2



// Template Literals
let invoice = '1350';
console.log(`Invoice Number: ${"INV-" + invoice}`);

let message = `
A
B
C
`;

console.log(message); // white spaces are maintained

function showMessage(message) {
    let invoiceNumber = '99';
    console.log(message);
}

let invoiceNumber = '1450';
showMessage(`Invoice Number: ${"INV-" + invoiceNumber}`); // 1450 - interpolation takes place first and its more important

function processInvoice(segments, ...values) {
    console.log(segments);
    console.log(values);
}

let num = '1350';
let amount = '2000';
processInvoice `invoice: ${num} for ${amount}`; // ["Invoice: ", " for ", ""] [1350, 2000]



// Destructuring

console.log('Destructuring');

// to destructure object use {} instead of []
let salary = ['32000', '50000', '75000']; // taking a part of the array and assign them to variable
let [low, average, high] = salary;
console.log(low); // 32000 

let salary2 = ['32000', '50000'];
let [low2, average2, high2] = salary2;
console.log(high2); // undefined

let salary3 = ['32000', '50000', '75000'];
let [low3, , high3] = salary3; // skip element
console.log(high3); // 75000

let salary4 = ['32000', '50000', '75000'];
let [low4, ...rest] = salary4; 
console.log(rest); // ["50000", "75000"]

let salary5 = ['32000', '50000'];
let [low5, average5, high5 = '88000'] = salary5;
console.log(high5); // 88000

let salary6 = ['32000', '50000', ['88000', '99000']];
let [low6, average6, [actualLow, actualHigh]] = salary6; 
console.log(actualLow); // 88000


let salary7 = {
    low: '32000',
    average: '50000',
    high: '75000'
}

// let newLow, newAverage, newHeigh;
// {low7: newLow, average7: newAverage, high7: newHigh} = salary7; // syntax error 
// ({low7: newLow, average7: newAverage, high7: newHigh} = salary7); // ok   
let {low7: newLow, average7: newAverage, high7: newHigh} = salary7;
console.log(newHigh); // 50000