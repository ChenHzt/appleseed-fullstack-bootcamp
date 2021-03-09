class Animal{
    constructor(_name, _sound){
        this.name = _name;
        this.sound = _sound;
    }

    getName(){
        return this.name;
    }

    getSound(){
        return this.sound;
    }

    print(){
        console.log(`name: ${this.name}, sound: ${this.sound}`);
    }
}

const dog = new Animal('dog', 'How!How!');
const cat = new Animal('cat', 'miew!');
const snake = new Animal('snake', 'sssss...');

dog.print();
cat.print();
snake.print();