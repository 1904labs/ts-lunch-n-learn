var Greeter = /** @class */ (function () {
    function Greeter(name, age) {
        this.name = name;
        this.age = age;
    }
    Greeter.prototype.greet = function () {
        document.write(this.name + " is " + this.age + " years old");
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
var tj = new Greeter('AJ', 33);
tj.greet();
