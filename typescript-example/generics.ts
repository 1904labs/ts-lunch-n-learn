function identity(arg: number): number {
    return arg;
}

// trying to use anything but a number breaks it
// we could cast to `any` but that dumbs down the compiler
// generics are the solution

function genIdentity<T>(arg: T): T {
    return arg;
}

// console.log(genIdentity('string texty text'));
// console.log(genIdentity(47));
// console.log(genIdentity({ key: 'value' }));

interface Identity<S, N> {
    name: S,
    age: N
}

const t: Identity<string, number> = {
    name: 'AJ',
    age: 33,
};

const u: Identity<object, number[]> = {
    name: {
        firstName: 'AJ',
        lastName: 'Srivastava'
    },
    age: [1, 2, 3]
};

class Component<State> {
    state: State;
    constructor(state) {
        this.state = state;
    }
    render() {
        return `${JSON.stringify(this.state)}`
    }
}

const comp = new Component({ count: 0 });
const comp2 = new Component({ key: 'val', foo: 'bar', baz: 'true'});
console.log(comp.render());
console.log(comp2.render());

