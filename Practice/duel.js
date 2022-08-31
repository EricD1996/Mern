class Unit{
    constructor(name, cost, power, resilience){
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    hardAlgorithm(){
        this.cost -= 2;
        console.log("increase resilience by 3");
        this.resilience += 3;
    }

    UnhandledPromiseRejection(){
        this.cost -= 1;
        console.log("reduce resilience by 2");
        this.resilience -= 2;
    }

    pairProgramming(){
        this.cost -= 3;
        console.log("increase power by 2");
        this.power += 2;
    }

    attack(targetPerson){
        targetPerson.resilience -= this.power;
    }
}

const redninja = new Unit("Red Belt Ninja", 3, 3, 4);
redninja.hardAlgorithm();
console.log(redninja);
const blackninja = new Unit("Black Belt Ninja", 4, 5, 4);
redninja.UnhandledPromiseRejection();
console.log(redninja);
redninja.pairProgramming();
console.log(redninja);
redninja.attack(blackninja);
console.log(redninja, blackninja);