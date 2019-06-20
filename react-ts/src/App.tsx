import React, {FunctionComponent, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import {WelcomeScreen, WelcomeScreenProps} from "./components/WelcomeScreen";
import {TodoList} from "./components/TodoList";
import hljs from 'highlight.js';
import 'highlight.js/styles/agate.css';

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
            <Router>
                <div className="app">
                    <Route path="/welcome" component={() => {
                        return (
                            <WelcomeScreen {...WSProps} />
                        )
                    }} />
                    <Route path="/class" component={SampleClassComponent} />
                    <Route path="/pure" component={SamplePureComponent} />
                    <Route path="/sfc" component={SampleFC} />
                    <Route path="/hooks" component={SampleHook} />
                    <Route path="/effects" component={() => {
                        return (
                            <EffectHook title="Typescript L&L" />
                        )
                    }} />
                    <Route path="/todos" component={TodoList} />
                </div>
            </Router>
        )
    }
}

class SampleClassComponent extends React.Component {
    componentDidMount(): void {
        hljs.initHighlightingOnLoad();
    }

    render() {
        return (
            <div>
                <h3>Sample Component Works!</h3>
                <pre><code className="typescript">
{`class SampleClassComponent extends React.Component<any, any> {
    componentDidMount(): void {
        hljs.initHighlightingOnLoad();
    }
    render() {
        /* render function */
    }
}`}
                </code></pre>
            </div>
        )
    }
}

class SamplePureComponent extends React.PureComponent {
    render() {
        return (
            <div>
                <h3>Sample Pure Component Works</h3>
                <a href="https://codeburst.io/when-to-use-component-or-purecomponent">What's the difference?</a>
                <p><em>PureComponent handles 'shouldComponentUpdate' for you</em></p>
            </div>
        )
    }
}

const SampleFC: FunctionComponent = () => {
    useEffect(() => hljs.initHighlightingOnLoad());
    return (
        <div>
            <h3>Sample Stateless Functional Component Works!</h3>
            <pre><code className="javascript">
{`const FunctionComponent = (props) => {
    return (
        <div>Sample Function Component</div>
    )
}`}
            </code></pre>
        </div>
    )
};

const SampleHook: FunctionComponent = () => {
    const [ str, setStr ] =  useState('1904labs');
    const [ count, setCount ] = useState(0);
    return (
        <div>
            <h1>{str}</h1>
            <h1>Count {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>

    )
};

interface EHProps {
    title: string;
}

const props: EHProps = {
    title: 'Typescript L&L'
}

const EffectHook: FunctionComponent<EHProps> = (props: EHProps) => {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <div>{props.title}</div>
            <div onClick={() => setCount(count + 1)}>Click Me</div>
            <SocialCard name="AJ Srivastava" age={47} location="Maplewood"/>
        </div>
    )
};

interface SocialCardProps {
    name: string;
    age: number;
    location: string;
}

const SocialCard = (props: SocialCardProps) => {
    return (
        <div className="social-card">
            <div className="social-card-header">{props.name}</div>
            <div className="social-card-body">{props.location} - {props.age}</div>
        </div>
    )
};

