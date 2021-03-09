const hero = {
  health: 5,
  power: 68,
  getStrength() {
    if (this.health <= 5) {
      return this.power - 10;
    }
    return this.power;
  },
};

function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return 'I am stronger';
  }
  return 'You are stronger';
}
console.log(whoIsStronger(hero.getStrength.bind(hero)));

// without binding getStrength to hero 'this' is refered to window which does not have health or power attributes.
