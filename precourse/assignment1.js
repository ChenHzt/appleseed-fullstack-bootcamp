const readlineSync = require('readline-sync');

let Answer = function(answer, characterID){
    this.answerText = answer;
    this.characterID = characterID;
}

Answer.prototype = {
    toString(){
        return `${this.answerText}`
    }
}

let Question = function(questionID, question, answersArr){
    this.questionID = questionID;
    this.question = question; 
    this.answers =[
        new Answer(answersArr[0],0),
        new Answer(answersArr[1],1),
        new Answer(answersArr[2],2),
        new Answer(answersArr[3],3)
    ];
    this.shuffle = this.answers.sort((a,b)=> Math.random() - 0.5);
}


Question.prototype.toString = function(){
    return `Question ${this.questionID}: ${this.question}

    (1) ${this.shuffle[0]}
    (2) ${this.shuffle[1]}
    (3) ${this.shuffle[2]}
    (4) ${this.shuffle[3]}
`
}


AngelOrDevilQuiz  = function (){
    this.quiz = [
        new Question(1,'Are you mean?', [
            'What does "mean" mean?', 'No, I am friendly', 'I can be, sometimes', 'Yes, I am often mean'
        ]),
        new Question(2,'How is your mood in the morning?', [
            'Happy to wake up to another beautiful day', 'Fine I guess..', 'I hate mornings ','No one is allowed to talk to me before I have my coffee!!',
        ]),
        new Question(3,'What is your favorite animal?', [
            'Butterfly', 'Dog', 'Snake', 'Cat'
        ]),
        new Question(4,'What do you think of people who stop on a staircase to check something on their phone?', [
            'There\'s nothing wrong with doing that', 'Inconsiderate', 'They just get in the way', 'They have a special place in hell'
        ]),
        new Question(5,'How often do you take the last chip in a communal bowl of chips?', [
            'I don\'t ever do that', 'Only when everyone else has moved on to the main meal', 'Only after asking if anyone else wants it', 'I always take it!'
        ])];

}

AngelOrDevilQuiz.prototype = {
    startQuiz(){
        this.welcome();
        this.questions();
        this.showResult();
    },
    welcome(){
        this.welcome = String.raw`

        ___                   _               ______           _ _ ___  
       / _ \                 | |              |  _  \         (_) |__ \ 
      / /_\ \_ __   __ _  ___| |   ___  _ __  | | | |_____   ___| |  ) |
      |  _  | '_ \ / _' |/ _ \ |  / _ \| '__| | | | / _ \ \ / / | | / / 
      | | | | | | | (_| |  __/ | | (_) | |    | |/ /  __/\ V /| | ||_|  
      \_| |_/_| |_|\__, |\___|_|  \___/|_|    |___/ \___| \_/ |_|_|(_)  
                    __/ |                                               
                   |___/                                                
        `;
        console.log(this.welcome);
        console.log('^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^\n');
    },
    printAngel(){
        const angel  = String.raw`
                _......._
                :_       _:
    ,---.,_       '''''''       _,.---,
    {_=_-=._'-.   .-"""""-.   .-'_.-=_=_}
    {-=_-    ''.\ /         \ /.''    =_-=}
    {-_=        \\| (_((_(( |//        =_-}
    {-_=-       \( (*   *) )/       =-_=}
    {_-=_=-     ) )  ^  ( (     -=_=-_}
        {_=_-=-   (_\ '-' /_)   -=-_=_}
        {_-_=_     ') ('      -_=_}
            {_-=   .-'\ /'-.  -=_}  
            {_= /    ^    \ =_}
            '-/ _.=. .=._ \-'
                \/_)  '  (_\/
                |\       /|
                | '.   .' |
                |   '.'   |
                |         |
                |         |
                |         |
                |         |
                |         |
                |         |
                |         |
                '-'-'-'-'-'
            YOU ARE AN ANGEL!!
        GOOD TO KNOW PEOPLE LIKE YOU EXIST
    `;
        console.log(angel);
    },

    printDevil(){
        const devil = String.raw`
                ,        ,
                /(        )'
                \ \___   / |
                /- _  '-/  '
                (/\/ \ \   /\
                / /   | '    \
                O O   ) /    |
                '-^--''<     '
                (_.)  _  )   /
                '.___/'    /
                '-----' /
    <----.     __ / __   \
    <----|====O)))==) \) /====
    <----'    '--' '.__,' \
                |        |
                    \       /
            ______( (_  / \______
    (FL)   ,'  ,-----'   |        \
            '--{__________)        \/   
            YOU ARE THE DEVIL
        YOU SHOULD LEARN HOW TO BEHAVE
    `;
        console.log(devil);
    },

    questions(){
        this.sum = 0;
        this.quiz.forEach(element => {
            console.log(element.toString());
            answer = readlineSync.keyIn('choose your answer: ', {limit: '$<1-4>'});
            this.sum += element.shuffle[answer-1].characterID * 2;
            console.log('\n^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^\n');
        
        });

    },

    showResult(){
        if(this.sum < 10)
            this.printAngel();
        else if(this.sum<20)
            console.log("you are not an angle\nTry being nicer to people ".toUpperCase());
        else 
            this.printDevil();
    }
}

HogwartsSortingHat = function(){
    this.quiz = [
        new Question(1,'Which color do you prefer?', [
            'red', 'blue', 'green', 'yellow'
        ]),
        new Question(2,'You opened the door and saw a mouse! What will you do?', [
            'grab him in a box and set him free', 'buy the most sophisticated trap', 'stand on the nearest chair and wait for it to disappear', 'live with him in love side by side'
        ]),
        new Question(3,'What is your favorite animal?', [
            'lion', 'eagle', 'snake', 'badger'
        ]),
        new Question(4,'People say about you that you are...', [
            'brave', 'smart', 'manipulative', 'sensitive'
        ]),
        new Question(5,'What\'s the thing that scares you the most?', [
            'losing the people we care about', 'get a low score on the test', 'humiliate ourselves in public', 'everything scares me'
        ])];
}

HogwartsSortingHat.prototype = {
    startQuiz(){
        this.welcome();
        this.questions();
        this.showResult();
    },
    welcome(){
        const welcome = String.raw`
        __        __   _                                         
        \ \      / /__| | ___ ___  _ __ ___   ___                
         \ \ /\ / / _ \ |/ __/ _ \| '_ ' _ \ / _ \               
          \ V  V /  __/ | (_| (_) | | | | | |  __/               
           \_/\_/ \___|_|\___\___/|_| |_| |_|\___| 
     _          _   _                                _
    | |_ ___   | | | | ___   __ ___      ____ _ _ __| |_ ___ 
    | __/ _ \  | |_| |/ _ \ / _' \ \ /\ / / _' | '__| __/ __|
    | || (_) | |  _  | (_) | (_| |\ V  V / (_| | |  | |_\__ \
     \__\___/  |_| |_|\___/ \__, | \_/\_/ \__,_|_|   \__|___/
                             |___/                                                              
`;
        console.log(welcome);
        console.log('\nHi, I am the Sorting hat.\nAccording to your answerson the following questions,\nI will assign you to your home for the next seven years here at Horwarts\nGOOD LUCK!\n');

        console.log('^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^\n');

    },
    printGryffindor(){
        const gryffindor  = String.raw`

  _____             __   __  _           _             
 / ____|           / _| / _|(_)         | |            
| |  __ _ __ _   _| |_ | |_  _ _ __   __| | ___  _ __  
| | |_ | '__| | | |  _||  _|| | '_ \ / _' |/ _ \| '__| 
| |__| | |  | |_| | |  | |  | | | | | (_| | (_) | |    
 \_____|_|   \__, |_|  |_|  |_|_| |_|\__,_|\___/|_|    
              __/ |                                  
             |___/                                   
`;
        console.log(gryffindor);
    },
    printRavenclaw(){
        const ravenclaw = String.raw`
 _____                            _                
|  __ \                          | |               
| |__) |__ ___   _____ _ __   ___| | __ ___      __
|  _  // _' \ \ / / _ \ '_ \ / __| |/ _' \ \ /\ / /
| | \ \ (_| |\ V /  __/ | | | (__| | (_| |\ V  V / 
|_|  \_\__,_| \_/ \___|_| |_|\___|_|\__,_| \_/\_/                                         
`;
        console.log(ravenclaw);
    },
    printHufflepuff(){
        const hufflepuff = String.raw`

 _    _        __  __ _                   __  __ 
| |  | |      / _|/ _| |                 / _|/ _|
| |__| |_   _| |_| |_| | ___ _ __  _   _| |_| |_ 
|  __  | | | |  _|  _| |/ _ \ '_ \| | | |  _|  _|
| |  | | |_| | | | | | |  __/ |_) | |_| | | | |  
|_|  |_|\__,_|_| |_| |_|\___| .__/ \__,_|_| |_|  
                            | |                  
                            |_|                  
` ;
        console.log(hufflepuff);
    },
    printSlytherin(){
        const slytherin = String.raw`

  _____ _       _   _               _       
 / ____| |     | | | |             (_)      
| (___ | |_   _| |_| |__   ___ _ __ _ _ __  
 \___ \| | | | | __| '_ \ / _ \ '__| | '_ \ 
 ____) | | |_| | |_| | | |  __/ |  | | | | |
|_____/|_|\__, |\__|_| |_|\___|_|  |_|_| |_|
           __/ |                            
          |___/                             
`;
        console.log(slytherin);
    },

    questions(){
        this.scoreArr = [0,0,0,0];
        this.quiz.forEach(element => {
            console.log(element.toString());
            answer = readlineSync.keyIn('choose your answer: ', {limit: '$<1-4>'});
            this.scoreArr[element.shuffle[answer-1].characterID]++;
            console.log('\n^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^\n');

        });

    },

    showResult(){
        let max = Math.max.apply(Math, this.scoreArr);
        let win = this.scoreArr.indexOf(max);
        if(win == 0)
            this.printGryffindor();
        else if(win == 1)
            this.printRavenclaw();
        else if(win == 2)
            this.printSlytherin();
        else this.printHufflepuff();
    }
}

    
let quizs = ['Hogwarts Sorting Hat', 'Angle or Devil'];
index = readlineSync.keyInSelect(quizs, null,{cancel: false});
if (quizs[index] === 'Hogwarts Sorting Hat'){
    quiz = new HogwartsSortingHat();
    quiz.startQuiz();
}
else {
    quiz = new AngelOrDevilQuiz();
    quiz.startQuiz();
}


/*
In my program I implemented 4 custom objects:
1.	Question-
    a.	questionID – the question serial number in the quiz.
    b.	Question – the question text.
    c.	Answers – array of 4 answers.
    d.	toString() – method to design the template for printing a question
2.	Answer-
    a.	answerText – the answer text.
    b.	characterID – used for the calculation of the diagnosis, holds a number which represent the score for this answer.
    c.	toString() - method to design the template for printing an answer.
3.	HogwartsSortingHat – a quiz that return the Hogwarts house most fit to the user.
    a.	Quiz – group all of the questions and the answers. In here the answers are ordered by their score.
    b.	startQuiz() – manages the running of the quiz(welcome, questions,results)
    c.	 welcome() – prints a beautiful welcome headline.
    d.	Questions() – print the questions, waiting for an answer from the user.
In this quiz I chose to implement the diagnosis with a counter array of length 4 (for each result type). Every time an answer received, the value of the cell of the counter array with index corresponding to the answer scoring is increased by 1.
    e.	showResults()- calculates the result by choosing the cell of the counter array with the maximum value. In case of equality between 2 cells, the first gets picked. Al last, the results are presented to the user.
4.	AngelOrDevilQuiz – a quiz that return whether the user is an angle or a devil. Most of methods are the same as the HogwartsSortingHat, except for the algorithm for calculating the result.
Here, after every question the user answered, the scoring of the picked answer is added to a sum variable, and at the end of the quiz there are 3 ranges (for angel, devil and something between). The result is chosen by the value of sum.

In the beginning of the program the user is required to choose between the two quizzes.


 */