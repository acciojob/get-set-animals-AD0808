
class Animal {
    constructor(species) {
        this.speciess = species;
    }

    get species() {
        return this.speciess;
    }

    makeSound() {
        console.log(`The ${this.speciess} makes a sound`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
    purr() {
        console.log("purr");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
