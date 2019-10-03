'use strict';

var counter = 0;

var username = prompt ('what\'s your name');
console.log ('username', username);
alert ('Hello' + ' ' + username);


function askStudy() {
  var study = prompt ('did i go to the college ?');
  study = study.toUpperCase();
  if (study === 'YES' || study === 'Y') {
    alert ( 'Congrats' + ' ' + username);
    counter++;
  } else {
    alert ( 'you should to it' + ' ' + username);
  }
}

function askStudyS() {
  var studyPlus = prompt ( 'Dou i like sciences ?');
  studyPlus = studyPlus.toUpperCase();
  if (studyPlus === 'YES' || studyPlus === 'Y'){
    alert ('amazing');
    counter++;
  } else {
    alert('Oh' + '' + username + '' + 'science makes the word go around');
  }
}

function studyask() {
  var study2 = prompt ( 'Do i like biology ?');
  study2 = study2.toUpperCase();
  if (study2 === 'YES' || study2 === 'Y'){
    alert ( 'Welcome to my world');
    counter++;
  } else {
    alert ('Let me tell you that  biology is life');
  }
}

function jobs() {
  var job = prompt ( 'did i ever been teacher ?' );
  job = job.toUpperCase ();
  if ( job === 'YES' || job === 'Y') {
    alert ('It a Great Job' + ' ' + username);
    counter++;
  } else {
    alert ('I did it for 7years');
  }
}

function cooks() {
  var cook = prompt ( 'Do I know how to cook ?');
  cook = cook.toUpperCase ();
  if (cook === 'YES' || cook === 'Y') {
    alert ('Great !! That\'s one of the most important things to know');
    counter++;
  } else {
    alert ('I learned months ago !');
  }
}

function secretNumbers() {
  var secretNumber = 10;
  for (var i = 0; i < 4 ; i++) {
    var userNumberGuess = prompt ('well ! Can you guess my favorite number ?');
    userNumberGuess = parseFloat(userNumberGuess);
    if (userNumberGuess === secretNumber){
      alert ('Great you should be a magician' + ' ' + username);
      counter++;
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
}

function arrayFavorite() {
  for (var i = 0; i < 6 ; i++) {
    var myArray = ['pray', 'family', 'job', 'friends', 'sleeping', 'eating', 'learning'];
    var foundMatch = false;
    var answer = prompt('can you tell me one of the most important things in my life ?');
    for (var x = 0; x < myArray.length; x++) {
      console.log (myArray[x]);
      if (myArray[x] === answer){
        foundMatch = true;
        alert('Match found');
        counter++;
      }
    }
    if (foundMatch === true){
      break;
    }

  }
}

askStudy();
askStudyS();
studyask();
jobs();
cooks();
secretNumbers();
arrayFavorite();
alert('Your total score of correct answers is: ' + counter);
