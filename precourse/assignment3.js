const readlineSync = require('readline-sync');
const figlet = require('figlet');

let Game = function(){
    console.clear();
    this.words = ['Hello', 'Bootcamp', 'FullStack', 'Welcome', 'Apple'];
    this.attemptsLeft = 10;
    this.guessedletters = new Set();
    
    this.currentWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.currentWordLowerCase = this.currentWord.toLowerCase();
    this.wordDisplay = new Array(this.currentWord.length);
    for(let i = 0; i<this.currentWord.length;i++)
        this.wordDisplay[i] = `_`;
    
    
    this.currentWordMap = new Map();
    for(let i = 0 ; i < this.currentWord.length ; i ++){
        if(!this.currentWordMap.has(this.currentWordLowerCase[i]))
            this.currentWordMap.set(this.currentWordLowerCase[i],[i]);
        else{
            let temp = this.currentWordMap.get(this.currentWordLowerCase[i]);
            temp.push(i);
            this.currentWordMap.set(this.currentWordLowerCase[i],temp);
        }
    }

} 

Game.prototype = {
    hangmanAsciiDisplay(){
        let hangmen = [
`       
                    
                    
                    
                    
                    
          `,
`       
                    
                    
                    
                    
                    
  =========`,
`       
        |
        |
        |
        |
        |
  =========`,
`    +---+
        |
        |
        |
        |
        |
  =========`,
`    +---+
    |   |
        |
        |
        |
        |
  =========`,
`    +---+
    |   |
    O   |
        |
        |
        |
  =========`,
`    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`,
`    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`,
`    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`,
`    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`,
`    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========`
        ]
        return hangmen[10-this.attemptsLeft];
    },
    resetBoard(errMsg){
        console.clear();
        console.log(figlet.textSync('Hang Man', {
            font: 'Standard',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }));
        console.log(this.hangmanAsciiDisplay());
        console.log('\nThe word is: '+ this.wordDisplay.join(' '));
        console.log('\nGuessed: '+Array.from(this.guessedletters).join(', '));
        if(this.attemptsLeft==0)
            console.log('\nGame Over')
        else if(this.currentWordMap.size==0)
            console.log('\nWell Done!!')
        else console.log(`\n${this.attemptsLeft} attempts left`);
        if(errMsg)
            console.log(errMsg);
        else console.log();
    },
    guessLetter(letter){
        letter = letter.toLowerCase();
        if(this.guessedletters.has(letter))
        {
            this.resetBoard(`You already tried the letter ${letter}`);
            return;
        }
        this.guessedletters.add(letter);
        
        if(this.currentWordMap.has(letter))
        {
            let indices = this.currentWordMap.get(letter);
            for(let i = 0; i<indices.length; i++)
                this.wordDisplay[indices[i]] = `${this.currentWord[indices[i]]}`; 
            this.currentWordMap.delete(letter);
        }
        else this.attemptsLeft--;
        this.resetBoard();
    },
    guessWord(word){
        let errMsg='';
        if(word.toLowerCase() === this.currentWordLowerCase)
        { 
            for(let[key,value] of this.currentWordMap)
                for(let i = 0; i<value.length; i++)
                    this.wordDisplay[value[i]] = `${this.currentWord[value[i]]}`; 
            this.currentWordMap.clear();
        }
        else {
            errMsg = `${word} is not the correct word`
            this.attemptsLeft--;
            this.guessedletters.add(word);
        }
        this.resetBoard(errMsg);
        
    },

    processInput(input){
        if(!/^[a-zA-Z]+$/.test(input))
            this.resetBoard(`${input} is invalid input`);
        else if(input.length == 1)
                this.guessLetter(input);
        else this.guessWord(input);
            
    },

    play(){
        this.resetBoard();
        while(this.attemptsLeft>0 && this.currentWordMap.size>0){
            let input = readlineSync.question('Your Guess: ');
            this.processInput(input);
        }
    
    }

}

let game = new Game();
game.play();

/*
for the implementaion of this game i've created a custom object called Game, 
which contain the following atributes and methodes:

atributes: 
    * words - an array of stored words from which the word from this game is chosen randomly
    * attemptsLeft = the number of guesses left for the user
    * guessedLetters - a set contains all of the guesses the user have made
    * currentWord - the word that was chosen randomly
    * wordDisplay - an array which is printed to the console. it is initialized with '_' for 
        each cell, and when the letter in this place of the word is guessed then the 
        corresponded cell will contain the letter
    * currentWordMap - a map which holds as keys all the letters in the current word and as values all the indices this letter appears in the word
    
methods:
    * hangmanAsciiDisplay() - returns a string of the drawing of the hanged man, 
        corresponded to the numbers of attempts left
    * resetBoard() - in order for this game to look a little more "gamey", in every change 
        of the display, the console is cleard and printed all over again.
        in this method I print the logo, the hangman drawing, the number of attempts 
        left and all the gusses the user made so far
    * guessLetter(letter) - this method recive the letter the user guessed, and check
         if it exists in the word. if it does then all the appearences in the word are presented.
         if it doesn't then an attempt is decreased and the drawing of the hangman is changed.
         in case that the user entered a letter he already guessed then a message is shown and
         the attempts remain unchanged
    * guessWord(word) - check if the recived word is the same as the current word. if it is then 
        the word is presented and the game is over, otherwise the word is added to the preview 
        guesses, the user lose an attempt, and the hangman drawing is changed
    * processInput(input) - check if the input is valid and contains only letters, and then send 
        the input to guessWord or guessLetter according to the input. if the input is invalid a 
        message is presented
    * play() - the main methods, handels the reading of input from the user.
        if there are no attempts left then the game is over
    
*/
