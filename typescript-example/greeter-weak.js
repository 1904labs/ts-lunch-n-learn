var Greeter = /** @class */ (function () {
    function Greeter(name, age) {
        this.name = name;
        this.age = age;
    }
    Greeter.prototype.greet = function () {
        console.log(this.name + " is " + this.age + " years old");
    };
    Object.defineProperty(Greeter.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
var ex = new Greeter('aj', { __ex: "why would this work" });
ex.greet();
var nameTs = function (name) { return name.toUpperCase(); };
console.log(nameTs(1337));
