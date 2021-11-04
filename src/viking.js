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
  this.vikingArmy.push(addOneVikingObj)
  };
  addSaxon(addOneSaxonObj){
  this.saxonArmy.push(addOneSaxonObj)
  };
  vikingAttack(){
    let randomSaxonSoldier = [Math.floor(Math.random()* this.saxonArmy.length)]
    let battleText = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[0].strength)
    if (this.saxonArmy[randomSaxonSoldier].health<=0){
      this.saxonArmy.splice(randomSaxon)
    }
    return battleText
  }

  saxonAttack(){
    let randomViking = [Math.floor(Math.random()* this.vikingArmy.length)]
    let battleText = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[0].strength)
    if (this.vikingArmy[randomViking].health<=0){
      this.vikingArmy.splice(randomViking)
    }
    return battleText

  };
  showStatus(){
    if(this.saxonArmy.length<= 0){
      return `Viking`
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
