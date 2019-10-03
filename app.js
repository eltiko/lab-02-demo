'use strict'


var username = prompt ('what\'s your name');
console.log ('username', username);
alert ('Hello' + ' ' + username);
var study = prompt ('did you go to the college');
study = study.toUpperCase();
if (study === 'YES' || study === 'Y') {
  alert ( 'Congrats' + ' ' + username );
} else {
  alert ( 'you should to it' + ' ' + username);
}
var studyPlus = prompt ( 'Dou you like sciences');
studyPlus = studyPlus.toUpperCase();
if (studyPlus === 'YES' || studyPlus === 'Y'){
  alert ('amazing');
} else {
  alert('Oh' + '' + username + '' + 'science makes the word go around');
}var study2 = prompt ( 'Do you like biology');
study2 = study2.toUpperCase();
if (study2 === 'YES' || study2 === 'Y'){
  alert ( 'Welcome to my world');
} else {
  alert ('Let me tell you that  biology is life');
}
var job = prompt ( 'did you ever been teacher' );
job = job.toUpperCase ();
if ( job === 'YES' || job === 'Y') {
  alert ('you did the best thing in the world' + ' ' + username);
} else {
  alert ('knowledge is the only thing you can share without loosing it');
}
var cook = prompt ( 'Do you know how to cook');
cook = cook.toUpperCase ();
if (cook === 'YES' || cook === 'Y') {
  alert ('Your partener will love you so much as your kids');
} else {
  alert ('You should learn it for youself, your partener and your kids of course');
}
var secretNumber = 10;
for (var i = 0; i < 4 ; i++)  {
  var userNumberGuess = prompt ('well ! Lets play ! Can you guess my favorite number');
  userNumberGuess = parseFloat(userNumberGuess);
  if (userNumberGuess === secretNumber){
    alert ('Great you should be a magician' + ' ' + username);
} 
if (userNumberGuess === secretNumber){ 
    break; 
}
  else if ( userNumberGuess > secretNumber){
    alert ('nope ! it\'s lower');
} else if (userNumberGuess < secretNumber){
    alert ('i thing it\' higher than that');
} 
}
alert( 'My favorite number is 10' + ' ' + username);
for (var i = 0; i < 6 ; i++) {
  var myArray = ['pray', 'family', 'job', 'friends', 'sleeping', 'eating', 'learning'];
 var foundMatch = false
  var answer = prompt('can you tell me one of the most important things in my life ?');
  for (var x = 0; x < myArray.length; x++) {
    console.log (myArray[x]);
    if (myArray[x] === answer){
   foundMatch = true 
      alert('Match found'); 
    }
  }
  if (foundMatch === true){
    break;
  }
  
}