function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

// 1st method
Pokemon.prototype.callPokemon = function(){
  return `i choose you ${this.name}`;
}

// 2nd method
Pokemon.prototype.attack = function(num){
  return `${this.name} used ${this.attackList[num]}`
}

// creating Objects
const pokemon1 = new Pokemon("Abra","Fossil Pokémon",["Psychic"]);
const pokemon2 = new Pokemon("Absol","Baby Pokémon",["Psychic","Dark"]);
const pokemon3 = new Pokemon("Aggron","Mythical Pokémon",["Steel","Rock"]);

// call the functions
console.log(pokemon1.callPokemon());
console.log(pokemon2.callPokemon());
console.log(pokemon3.callPokemon());

console.log(pokemon1.attack(0));
console.log(pokemon2.attack(1));
console.log(pokemon3.attack(1));