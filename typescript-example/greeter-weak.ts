class Greeter {
    name;
    _age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`${this.name} is ${this.age} years old`);
    }


    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

const ex = new Greeter('aj', {__ex: "why would this work"});

ex.greet();

const nameTs = (name) => name.toUpperCase();

console.log(nameTs(1337));
