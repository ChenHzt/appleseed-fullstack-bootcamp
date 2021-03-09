class SortNumber {
    constructor() {
        this.numList = []
    }

    addNum(num) {
        if(this.isPrime(num)){
            this.numList.push(num);
            return true;
        }
        return false;
    }

    isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    removeNum(num){
        if(this.numList.includes(num)){
            this.numList.splice(this.numList.indexOf(num));
            return true;
        }
        return false;
    }

    getAll(){
        return this.numList;
    }

    print(){
        console.log(this.numList.toString());
    }

    share(sortNums){
        const shared = this.numList.filter(value => sortNums.getAll().includes(value));
        return shared.length;
    }

    union(sortNums){
        const set = new Set(this.numList);
        const extendedSet = new Set([ ...set, ...sortNums.getAll() ]);
        return [...extendedSet];
    }
}

const sortNums1 = new SortNumber();
sortNums1.addNum(2);
sortNums1.addNum(3);
sortNums1.addNum(4);
sortNums1.addNum(7);

const sortNums2 = new SortNumber();
sortNums2.addNum(6);
sortNums2.addNum(7);

