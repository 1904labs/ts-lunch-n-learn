import React from 'react';
import './App.css';

// Create an interface to strongly type the props and state for a stateful component
interface IAppState {
    count: number;
}

interface IAppProps {
    name: string;
}

class App extends React.Component<IAppProps, IAppState> {
    public state: IAppState = {
        count: 0
    };

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    public render() {
        return (
            <div className="App">
                Hello {this.props.name}!
                <StatelessFC count={this.state.count}/>
                <button onClick={() => this.decrement()}>Decrement</button>
                <button onClick={this.increment.bind(this)}>Increment</button>
            </div>
        );
    }
}

interface IStatelessFCProps {
    count: number;
} 

const StatelessFC = (props: IStatelessFCProps) => {
    return (
        <div>Count: {props.count}</div>
    )
};

export default App;
