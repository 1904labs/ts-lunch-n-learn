import React, {FunctionComponent, useState} from 'react';
import './App.scss';
// import {Todos} from "./components/Todos";

// 1. Classic Class Component
// 2. Classic Pure Component
// 3. Const SFC
// 4. Hooks Example Text
// 5. Hooks Example Number

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <ClassComponent title="Typescript Lunch & Learn" version={0.1} />
                {/*<Todos title="Testing Typescript" />*/}
                <HookExample initialCount={47} />
            </div>
        )
    }
}

interface ClassProps {
    title: string;
    version: 0.1;
}

class ClassComponent extends React.Component<ClassProps, {}>{
    render() {
        return (
            <div>
                <div>{this.props.title} - {this.props.version}</div>
                <H3Title text="H3 Title Component" />
                {/*<CounterClass count={0} />*/}
                <SFCExample text="AJ Srivastava"/>
                <InputSFC/>
            </div>
        )
    }
}

interface H3TTitleProps {
    text: string;
}

// Class component
class H3Title extends React.PureComponent<H3TTitleProps> {
    render() {
        return (
            <h3>{this.props.text}</h3>
        )
    }
}

// Stateless Functional Component as function
const SFCExample: FunctionComponent<H3TTitleProps> = (props: H3TTitleProps) => {
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
