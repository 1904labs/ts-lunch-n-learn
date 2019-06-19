import React from 'react';

interface IProps {
    title: string;
}

interface IState {
    todos: ITodo[];
    inputText: string;
}

interface ITodo {
    id: number;
    done: boolean;
    task: string;
}
export class Todos extends React.Component<IProps, IState> {
    public state: IState = {
        inputText: '',
        todos: [{
            id: 0,
            done: false,
            task: 'Write app'
        }]
    };

    public submitTodo() {
        const todos = this.state.todos.concat([{
            id: this.state.todos.length + 1,
            done: false,
            task: this.state.inputText
        }]);
        this.setState({todos, inputText: ''});
    }

    render() {
        return (
            <div>
                <Test name="AJ wuz here" />
                {this.props.title}
                {this.state.todos.length > 0 && this.state.todos.map((todo: ITodo) => {
                        return (
                            <div key={todo.id}>{todo.task}</div>
                        )
                    })
                }
                <input type="text" onChange={(e) => this.setState({inputText: e.target.value})} value={this.state.inputText} />
                <button onClick={(e) => this.submitTodo()}>Submit</button>
            </div>
        )
    }
}

interface PureProps {
    name: string;
    bleh?: NestedType;
}

interface NestedType {
    set: Set<number>;
}


export class Test extends React.PureComponent<PureProps> {
    constructor(props: PureProps) {
        super(props);
        const s = new Set<number>();
        s.add(1);
    }
    render() {
        return (
            <div className="pure">Name: {this.props.name}</div>
        )
    }
}

