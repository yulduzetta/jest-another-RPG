const Potion = require("../lib/Potion");

// name='' sets default empty string if no name was provided
function Player(name = "") {
  this.inventory = [new Potion("health"), new Potion()];
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 10 + 95);
  this.agility = Math.floor(Math.random() * 10 + 95);
}

module.exports = Player;
