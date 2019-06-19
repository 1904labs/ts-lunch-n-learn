class Greeter {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}`
    }
}

const t = new Greeter('aj', 47);

t.greet(); // outputs `Hello aj`

t.name = function () {
    return 'why would you allow this'
};

console.log(t.name());

const name = name => name.toUpperCase();
name(1337);

