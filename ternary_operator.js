let isNightTime = true;
if(isNightTime){
    console.log('Turn on the lights!');
}
else {
    console.log('Turn off the lights')
}


// same kura can be written this way
isNightTime ? console.log('Turn on the lights')
: console.log('Turn off the lights!');
// How cool is that

/*
Here!
THe condition isNightTime is provided before the ?
Two expressions follow the ? and are seperated by a colon:
If the condition evaluates to true, the first condition executes 
If the condition is false, the second condition executes
*/



let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!')
:console.log("I don't love that!");


// can directly store as well

let age = 16;
let result = age > 18 ? 'adult' : 'teen';
