// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(word) {
   console.log("Let's play some Scrabble!" + '\n');
   word = input.question("Enter a word to score: ");
   return word;
};


let simpleScorer = function(word) {
   let score = word.length;
   return score;
};

let vowelBonusScorer = function(word) {
   word = word.toUpperCase()
   let score = 0;
   let vowels = ['A', 'E', 'I', 'O', 'U'];
   for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
         score += 3;
      } else {
         score += 1;
      }
   }
   return score;
};


let scrabbleScorer = function(word) {
   let score = 0;
   
   for (let i = 0; i < word.length; i++) {
      word = word.toLowerCase();
      for (item in newPointStructure) {
         if (word[i] === item) {
            score += newPointStructure[item];
         }
      }
   }
   return score;
};

const scoringAlgorithms = [
   simple = {name: 'Simple Score',
      description: 'Each letter is worth 1 point',
      scorerFunction: simpleScorer
   },
   bonusVowels = {
      name: 'Bonus Vowels',
      description: 'Vowels are worth 3 points,consonants are 1 point', 
      scorerFunction: vowelBonusScorer
   },
   oldScrabble = {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm',
      scorerFunction: scrabbleScorer
   }
];

function scorerPrompt() {
   console.log('\n' + "Which scoring algorithm would you like to use?" + '\n' )
      for (let i = 0; i < 3; i++) {
         console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
      }
      selection = input.question('\n' + "Enter 0, 1, or 2: ");
      
   console.log(`Scored using: ${scoringAlgorithms[selection].name}`)
   console.log(`Score for '${word}': ${scoringAlgorithms[selection].scorerFunction(word)}`)
   return ;
}

function transform(oldPointStructure) { 
   let transformed = {}

   for (item in oldPointStructure) {
      for (let i = 0; i < oldPointStructure[item].length; i++) {
            transformed[oldPointStructure[item][i].toLowerCase()] = Number(item);
      }
   }
   return transformed;
};

let newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0; // Counts spaces as 0

function runProgram() {
   word = initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};