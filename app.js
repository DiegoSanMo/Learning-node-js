function greet(){
    console.log('Hi!');
}

//greet();

function logGreeting(fn){
    fn();
}
logGreeting(greet);

var greetMe = function(){
    console.log('Hi, my name is Diego');
}

greetMe();

logGreeting(greetMe);

logGreeting(function(){
    console.log('Hi Diego Moreno');
});


var greet = require('./greet');

greet();

