const obj = {
  name: 'John Doe',
  printNameNow() {
    console.log(`The name is ${this.name}`);
  },
  printNameLater() {
    setTimeout(this.printNameNow.bind(this), 1000);
  },
};

const printNameNow = obj.printNameNow();
const printNameLater = obj.printNameLater();
