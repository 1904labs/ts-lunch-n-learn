import React from 'react';
import './WelcomeScreen.scss';

export interface WelcomeScreenProps {
    title: string;
    authors: string[];
    timestamp: string;
}

export class WelcomeScreen extends React.Component<WelcomeScreenProps, {}> {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="content">
                        <h1>{this.props.title}</h1>
                        <div>{this.props.timestamp}</div>
                        <ul>
                            {this.props.authors.map(author => {
                                return (
                                    <li key={Math.random()}>{author}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="agenda">
                    <h1>React With Typescript</h1>
                    <h2>Agenda</h2>
                    <ol>
                        <li>Installation</li>
                        <li>Creating a Class Component</li>
                        <li>Creating a Pure Component</li>
                        <li>Creating a Stateless Functional Component</li>
                        <li>Creating a Hook Component</li>
                    </ol>

                    <h2>Installation</h2>
                    <h3>From Scratch</h3>
                    <a href="https://facebook.github.io/create-react-app/docs/adding-typescript">Documentation</a>
                    <h3><pre>create-react-app</pre></h3>
                    Install create-react-app (globally if desired)
                    <pre>npx create-react-app my-app --typescript</pre>

                    <h3>Adding Typescript to Existing Project</h3>
                    <pre>npm install --save typescript @types/node @types/react @types/react-dom @types/jest</pre>
                    - Rename any file to `.tsx` and restart dev server

                    <h2>Creating Components</h2>
                    <h3>Creating a Class Component</h3>
                    <ul>
                        <li>Class syntax</li>
                        <li>Creating `Props` and `State` as Interfaces and implementing as Generics</li>
                    </ul>

                    <h3>Creating a Pure Component</h3>
                    <a href="https://medium.com/groww-engineering/stateless-component-vs-pure-component-d2af88a1200b">The hell is the difference?</a>
                    <ul>
                        <li>Syntax</li>
                        <li>Props</li>
                    </ul>

                    <h3>Creating a Stateless Functional Component</h3>
                    <ul>
                        <li>Syntax</li>
                        <li>Props</li>
                    </ul>

                    <h3>Creating a Hook Component</h3>
                    <ul>
                        <li>Demonstration of type checking in `useState`</li>
                    </ul>
                </div>
            </div>
        )
    }
}
