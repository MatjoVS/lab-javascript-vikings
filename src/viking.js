// Soldier
class Soldier {
  constructor(health ,strength ) {
    this.health= health
    this.strength = strength 
  }
  attack(){
return this.strength;
  }
  receiveDamage(damage){
     this.health=-damage
  }

}

// Viking
class Viking extends Soldier{
  constructor(health, strength, name){
  super(health, strength)
  this.name=name
  }
  receiveDamage(damage){
    this.health =- damage;
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else return `${this.name} has died in combat`
    }
    battleCry(){
      return `Odin owns You All!`
    }
  }

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health-=damage;
    if(this.health<= 0 ){`A saxon has died in combat`
  }else {`A saxon has received ${damage} points of damage`

  }


}

// War
class War {
  constructor(vikingArmy, SaxonArmy){
    this.vikingArmy=[]
    this.saxonArmy=[]
  }
  addViking(addOneVikingObj){
  this.vikingArmy.object.assign(addOneVikingObj)
  };
  addSaxon(addOneSaxonObj){
  this.saxonArmy.object.assign(addOneSaxonObj)
  };
  vikingAttack(){
    let allSaxonArmySoldiers-Math.floor(Math.random()* this.saxonArmy.length)
  };
  saxonAttack(){};
  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
