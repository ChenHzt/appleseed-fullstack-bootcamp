function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype = {
  callPokemon() {
    console.log(`I choose you, ${this.name}`);
  },
  attack(attackNum) {
    console.log(`${this.name} used ${this.attackList[attackNum]}`);
  },
};

const pikachu = new Pokemon('pikachu', 'electricity', [
  'attack1',
  'attack2',
  'attack3',
]);

const pokemon2 = new Pokemon('pokemon2', 'water', ['attack11', 'attack22']);

pikachu.callPokemon();
pikachu.attack(0);

pokemon2.callPokemon();
pokemon2.attack(1);
