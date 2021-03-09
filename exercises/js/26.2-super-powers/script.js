function printSuperPower() {
  console.log(`my superpower is ${this.superPower}`);
}

const storm = {
  superPower: 'flying',
};

storm.printSuperPower = printSuperPower;
storm.printSuperPower();
