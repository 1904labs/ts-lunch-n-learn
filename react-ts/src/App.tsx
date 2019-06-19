import React, {FunctionComponent, useState} from 'react';
import './App.scss';
import {WelcomeScreen, WelcomeScreenProps} from "./components/WelcomeScreen";
// import {Todos} from "./components/Todos";

// 1. Class Component
// 2. Pure Component
// 3. Stateless Functional Component
// 4. Hooks Example Text
// 5. Hooks Example Number

export default class App extends React.Component {
    render() {
        const WSProps: WelcomeScreenProps = {
            title: 'Typescript Lunch & Learn - React',
            authors: ['AJ Srivastava', 'Alex Rains'],
            timestamp: new Date().toLocaleString()
        };
        return (
            <div className="app">
                <WelcomeScreen {...WSProps} />
                {/*<ClassComponent title="Typescript Lunch & Learn" version={0.1} />*/}
                {/*<Todos title="Testing Typescript" />*/}
                {/*<HookExample initialCount={47} />*/}
            </div>
        )
    }
}

interface ClassProps {
    title: string;
    version: 0.1;
}

interface ClassState {
    loading: boolean;
}

class ClassComponent extends React.Component<ClassProps, ClassState>{
    state: ClassState;
    constructor(props: ClassProps) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div>
                <div>{this.props.title} - {this.props.version}</div>
                <div>Loading: {this.state.loading ? 'True' : 'False'}</div>
                <H3Title text="H3 Title Component" />
                {/*<CounterClass count={0} />*/}
                <SFCExample text="AJ Srivastava"/>
                <InputSFC/>
            </div>
        )
    }
}

interface HTitleProps {
    text: string;
}

// Class Pure Component
export class H3Title extends React.PureComponent<HTitleProps> {
    render() {
        return (
            <h3>{this.props.text}</h3>
        )
    }
}

export const H1Title = (props: HTitleProps) => {
    return (
        <h1>{props.text}</h1>
    )
};

// Stateless Functional Component as function
const SFCExample: FunctionComponent<HTitleProps> = (props: HTitleProps) => {
    return (
        <h3>{props.text}</h3>
    )
};


const InputSFC = (props: any) => {
    const [ name, setName ] = useState('AJ');
    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} value={name} />
            <div>
                {name}
            </div>
        </div>
    )
};

interface HookExampleProps {
    initialCount: number;
}

const HookExample = (props: HookExampleProps) => {
    const [ count, setCount ] = useState<number>(props.initialCount);
    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
