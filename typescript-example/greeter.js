var Person = /** @class */ (function () {
    function Person(person) {
        this.person = person;
    }
    Person.prototype.greet = function (el) {
        el.innerHTML = "Hello " + this.person.firstName + " " + this.person.lastName + "!";
    };
    return Person;
}());
var aj = new Person({
    firstName: 'AJ',
    lastName: 'Srivastava'
});
aj.person.age = 47;
aj.greet(document.getElementById('target'));
