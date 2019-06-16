class Greeter {
    public name;
    private _age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        document.write(`${this.name} is ${this.age} years old`);
    }


    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

const tj = new Greeter('AJ', 33);

tj.greet();
