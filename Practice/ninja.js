class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.name);
        console.log(this.health);
        console.log(this.strength);
        console.log(this.speed);
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
        console.log(this.wisdom);
        this.drinkSake();
        console.log("Hello")
    }
}
const ninja1 = new Ninja("Hyabusa",13);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();

const sensei1 = new Sensei("sensei");
sensei1.speakWisdom();