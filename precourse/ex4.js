const readlineSync = require('readline-sync');

let amountOfPeople = readlineSync.question('How many people are going to the resturant?: ');
if(isNaN(amountOfPeople) || amountOfPeople<=0)
    throw new Error('input error. stopping program execution');

let isKosher = readlineSync.question('Should the resturant be Kosher? [y/n]: ').toLowerCase();
if(isKosher!='y' && isKosher!='n' )
    throw new Error('input error. stopping program execution');

 

let isLemehadrin;
if (isKosher === 'y')
    isLemehadrin = readlineSync.question('Should the Kashrut be Lemehadrin? [y/n]: ').toLowerCase();
else isLemehadrin = 'n';

if(isLemehadrin!='y' && isLemehadrin!='n')
    throw new Error('input error. stopping program execution');

isKosher = isKosher==='y' ? true : false;   
isLemehadrin = isLemehadrin==='y' ? true : false;   

const foodTypes = ['pizza', 'hamburger', 'sushi'];
let foodType = readlineSync.keyInSelect(foodTypes, 'What kind of food do you prefer? ');

let Resturant = function(name, maxAmountOfPeople, isKosher, isLemehadrin, foodType){
    this.name = name;
    this.maxAmountOfPeople = maxAmountOfPeople;
    this.isKosher = isKosher;
    this.isLemehadrin = isLemehadrin;
    this.foodType = foodType;
}

let resturants = [new Resturant('mypizza', '20', true, true, 'pizza'),
    new Resturant('mysushi', '20', true, true, 'sushi'),
    new Resturant('myburger', '20', true, true, 'hamburger'),
    new Resturant('americanPizza', '10', true, false, 'pizza'),
    new Resturant('italianPizza', '100', false, false, 'pizza'),
    new Resturant('furmans', '20', true, true, 'pizza'),
    new Resturant('theSushia', '30', false, false, 'sushi'),
    new Resturant('bestSushi', '10', true, true, 'sushi'),
    new Resturant('bigburger', '55', true, false, 'hamburger'),
    new Resturant('superBurger', '15', true, true, 'hamburger')];

let result=[];
   

resturants.forEach(function(resturant){
    if(parseInt(amountOfPeople) > parseInt(resturant.maxAmountOfPeople))
        return;
    if( isKosher && ! resturant.isKosher) //assuming that even if no Kashrut is needed, a Kosher resturant is still an option 
        return;
    if(isLemehadrin && ! resturant.isLemehadrin)
        return;
    if(foodTypes[foodType] != resturant.foodType)
        return;
    result.push(resturant);
});

if(result.length == 0)
    console.log('Sorry, there are no resturants that matchs the requirements');
else{
   console.log(result.length + ' resturants where found:');
   console.log(result); 
}



