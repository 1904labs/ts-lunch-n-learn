function identity(arg) {
    return arg;
}
// trying to use anything but a number breaks it
// we could cast to `any` but that dumbs down the compiler
// generics are the solution
function genIdentity(arg) {
    return arg;
}
var t = {
    name: 'AJ',
    age: 33
};
var u = {
    name: {
        firstName: 'AJ',
        lastName: 'Srivastava'
    },
    age: [1, 2, 3]
};
var Component = /** @class */ (function () {
    function Component(state) {
        this.state = state;
    }
    Component.prototype.render = function () {
        return "" + JSON.stringify(this.state);
    };
    return Component;
}());
var comp = new Component({ count: 0 });
var comp2 = new Component({ key: 'val', foo: 'bar', baz: 'true' });
console.log(comp.render());
console.log(comp2.render());
