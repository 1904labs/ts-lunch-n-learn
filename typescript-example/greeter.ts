interface IPerson {
    firstName: string;
    lastName: string;
    age?: number
}


class Person {
    person: IPerson;
    constructor(person: IPerson) {
        this.person = person;
    }
    greet(el: HTMLElement) {
        el.innerHTML = `Hello ${this.person.firstName} ${this.person.lastName}!`;
    }
}


const aj: Person = new Person({
    firstName: 'AJ',
    lastName: 'Srivastava',
});

aj.person.age = 47;

aj.greet(document.getElementById('target'));



