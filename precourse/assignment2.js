const readlineSync = require('readline-sync');


let Card = function(playerName){
    let suits = ['♣', '♥', '♦', '♠'];
    this.playerName = playerName;
    this.cardRank = Math.floor(Math.random() * (12)) + 1;
    this.cardSymbol = suits[Math.floor(Math.random() * (4)) ]; 
} 

let Player = function () {
    this.playerName = readlineSync.question('Please enter your name: ');
    this.playerMoney = 50;
    this.greet()

}

Player.prototype={
    greet(){
        console.log(`Hi ${this.playerName}!, Welcome to the best War game`);
        console.log(`You now have ${this.playerMoney} ILS`);
    },

    makeBet(){
        this.bet = readlineSync.questionInt(` ${this.playerName} Please enter your bet for the next round (1 to ${this.playerMoney}): `);
        if(isNaN(this.bet) || this.bet < 1 || this.bet > this.playerMoney)
        {  
            console.log(`I said between 1 to ${this.playerMoney} and you typed ${this.bet}!`);
            console.log(`I don't play with liars! Bye Bye`);
            throw new Error(`liars don't get to play this AWSOME game`);
        }
        return this.bet;
    },

    getCard(){
        this.card = new Card(this.playerName);
        return this.card;
    },

    win(){
        this.playerMoney += this.bet;
        console.log(`${this.playerName} You won!! ${this.bet} ILS have been added to your account`);
    },

    lose(){
        this.playerMoney -= this.bet;
        console.log(`${this.playerName} You lost!! ${this.bet} ILS have been taken from your account`);
    },

    isBroke(){
        if(this.playerMoney <= 0){
            console.log(`${this.playerName} You are BROKE. Bye Bye`);
            return true;
        }
        return false;
    }


}

let playerMoney;
let playerName;

let player1;
let player2;

function gameRound(){
    console.log('\n.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.\n')

    player1.makeBet();
    player2.makeBet();

    function printCards(cards){
        let lines = new Array(10);
        for(let i = 0; i <= 9 ; i++)
            lines[i] = new Array();
        let ranks = [0,0];
        let spaces = ['',''];
        for(let i = 0; i<2;i++){
            if(cards[i].cardRank >= 10)
            {
                ranks[i] = cards[i].cardRank;
                spaces[i] = '';
            }
            else{
                ranks[i] = cards[i].cardRank;
                spaces[i] = ' ';
            }
            lines[0].push(`${cards[i].playerName.padEnd(11)}`);
            lines[1].push(`┌─────────┐`);
            lines[2].push(`│${ranks[i]}${spaces[i]}       │`)
            lines[3].push(`│         │`)
            lines[4].push(`│         │`)
            lines[5].push(`│    ${cards[i].cardSymbol}    │`)
            lines[6].push(`│         │`)
            lines[7].push(`│         │`)
            lines[8].push(`│       ${ranks[i]}${spaces[i]}│`)
            lines[9].push(`└─────────┘`)

        }
        result = [];
        for(let i = 0; i<=9;i++)
            result.push(lines[i].join('         '));
        console.log( result.join('\n'));
        
    }

    let draw = true;
    do{ 
        printCards([player1.getCard(), player2.getCard()]);
        if(player1.card.cardRank > player2.card.cardRank)
        {
            player1.win();
            player2.lose();
            draw = false;
        }
        else if(player1.card.cardRank < player2.card.cardRank)
        {
            player1.lose();
            player2.win();
            draw = false;
        }
        else console.log('IT IS A DRAW. CHOOSING ANOTHER CARDS');
    }while(draw); //in case of draw- choose diffrent cards

    if(player1.isBroke() || player2.isBroke())
        return false;
    else  return true;
}


(function playGame() {
    let logo = `
                   .------.                                                                          .------.
.------.           |A .   |                                                       .------.           |A .   |
|A_  _ |    .------; / \\  |   _    _  ___  ______   _____   ___  ___  ___ _____   |A_  _ |    .------; / \\  |
|( \\/ )|-----. _   |(_,_) |  | |  | |/ _ \\ | ___ \\ |  __ \\ / _ \\ |  \\/  ||  ___|  |( \\/ )|-----. _   |(_,_) |
| \\  / | /\\  |( )  |  I  A|  | |  | / /_\\ \\| |_/ / | |  \\// /_\\ \\| .  . || |__    | \\  / | /\\  |( )  |  I  A|
|  \\/ A|/  \\ |_x_) |------'  | |/\\| |  _  ||    /  | | __ |  _  || |\\/| ||  __|   |  \\/ A|/  \\ |_x_) |------' 
'-----+'\\  / | Y  A|         \\  /\\  / | | || |\\ \\  | |_\\ \\| | | || |  | || |___   '-----+'\\  / | Y  A|
      |  \\/ A|-----'          \\/  \\/\\_| |_/\\_| \\_|  \\____/\\_| |_/\\_|  |_/\\____/         |  \\/ A|-----'
      '------'                                                                          '------' 

`
    console.log(logo);

    player1 = new Player();
    player2 = new Player();
    
    let keepPlaying;
    do{
        thereMoneyLeft = gameRound();
        if( !thereMoneyLeft)
            break;
        let options = ['Play another round!', 'Leave with my money'];
        let chice = readlineSync.keyInSelect(options, 'What would you like to do now? ', {cancel: false});
        keepPlaying = chice == 0 ? true : false;
    }while(keepPlaying);
})();

