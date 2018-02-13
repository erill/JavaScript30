// Traditional JS functions

// most common way of defining a function
function myFunction() {}

// function declated in global scope
// both of them create an internal variable that contains te code for the function
myFunction = function() {}

// function is limited to the current containing code block
var myFunction = function() {}

// function declated inside object 
var myObject = { myFunction: function(){} }

// function declared inside global object
myObject = { myFunction: function(){} }