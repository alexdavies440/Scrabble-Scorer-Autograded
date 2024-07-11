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
   console.log(oldScrabbleScorer(word));
   console.log(simpleScorer());        // TO TEST SIMPLESCORER
   console.log(vowelBonusScorer());   // TO TEST VOWEL BONUS SCORER
};

let newPointStructure;

let simpleScorer = function(word) {
   word = input.question("Simple Scorer: ") // TO TEST SIMPLESCORER
   score = word.length;
   return score;
};

let vowelBonusScorer = function(word) {
   word = input.question("Enter a word to score: ")
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


let scrabbleScorer;

const scoringAlgorithms = [
   simple = {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point',
      scoreFunction: simpleScorer
   },
   bonusVowels = {
      name: 'Bonus Vowels',
      description: 'Vowels are worth 3 points, consonants are 1 point',
      scoreFunction: vowelBonusScorer
   },
   oldScrabble = {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm',
      scoreFunction: oldScrabbleScorer
   }
];

function scorerPrompt(selection) {
   selection = input.question(`will fill this in later. pick 0, 1, or 2: `);
   console.log(`algorithm name: ${scoringAlgorithms[selection].name}`)
   console.log(`scorerFunction result: ${scoringAlgorithms[selection].scoreFunction()}`)
}

function transform() {};

function runProgram() {
   initialPrompt();
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