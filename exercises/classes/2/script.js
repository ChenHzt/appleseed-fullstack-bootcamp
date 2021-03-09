class Car{
    constructor(_brand, _speed){
        this.brand = _brand;
        this.speed = _speed;
    }

    getBrand(){
        return this.brand;
    }

    getSpeed(){
        return this.speed;
    }

    print(){
        console.log(`brand:${this.brand}, speed: ${this.speed}`);
    }

    setSpeed(_speed){
        this.speed = _speed;
    }
}

const cars = [];
cars.push(new Car('tesla', 220));
cars.push(new Car('audi', 150));
cars.push(new Car('toyota', 120));
cars.push(new Car('honda', 140));

const fastestCar = cars.reduce((max,current) => max.getSpeed() < current.getSpeed()? current : max);
console.log(fastestCar);

console.log(cars.sort((carA,carB) => carA.getSpeed() - carB.getSpeed()));
