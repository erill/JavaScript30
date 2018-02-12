// Function Arguments
// - arguments aren't required
// - like all variables in JS arguments are untyped

function myFunc(a, b, c) {
    return a + b + c;
}

function myFunc2() {
    var x =0;
    for (var i=0; i < arguments.length; i++) {
        x += arguments[i];
    }
    return x;
}

console.log(myFunc(1,2,3));
console.log(myFunc(1,2,3,4));
console.log(myFunc(1,2)); // retund 1 + 2 + undefined = NaN

console.log(myFunc2(1,2,3,4,5));

// Chaining 

// each function return a value. if you don't specify any
// function will return undefined
var Calc = function(start) {
    this.add = function(x) {
        start += x;
        return this;
    };
    this.multiply = function(x) {
        start *= x;
        return this;
    };
    this.equals = function(callback) {
        callback(start);
        return this;
    };
}

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function(result) {
        console.log(result);
    });


// Observable Properties
// In JS we dont have method bodies. We only really have simple value types

var Book = function(name, price) {
    var priceChanging = [], priceChanged = [];
    this.name = function(val) {
        return name;
    };
    this.price = function(val) {
        if (val !== undefined && val !== price) {
            for (var i =0; i < priceChanging.length; i++) {
                if (!priceChanging[i](this, val)) {
                    return price;
                }
            }
            price = val;
            for (var i=0; i<priceChanged.length; i++) {
                priceChanged[i](this);
            }
        }
        return price;
    };
    this.onPriceChanging = function(callback) {
        priceChanging.push(callback);
    };
    this.onPriceChanged = function(callback) {
        priceChanged.push(callback);
    };
};

var book = new Book('JS: The Good Parts', 23.99);

console.log('The name is: ' + book.name());
console.log('The price is $: ' + book.price());

book.onPriceChanging(function (b, price) {
    if (price > 100) {
        console.log('System error, proce has gone sooo high');
        return false;
    }
    return true;
});

book.onPriceChanged(function (b) {
    console.log('The book price has changed to: $' + b.price());
});

book.price(19.99);
book.price(2000);