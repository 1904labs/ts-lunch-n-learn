import React, {FunctionComponent, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import {WelcomeScreen, WelcomeScreenProps} from "./components/WelcomeScreen";
import {TodoList} from "./components/TodoList";

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
                    <Route path="/sfc" component={SampleSFC} />
                    <Route path="/hooks" component={SampleHook} />
                    <Route path="/todos" component={TodoList} />
                </div>
            </Router>
        )
    }
}

class SampleClassComponent extends React.Component {
    render() {
        return (
            <h3>Sample Component Works!</h3>
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

const SampleSFC: FunctionComponent = () => {
    return (
        <h3>Sample Stateless Functional Component Works!</h3>
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
