import React from 'react';
import './TodoList.scss';

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
export class TodoList extends React.Component<IProps, IState> {
    static defaultProps: IProps = {
        title: 'Typescript Todo List'
    };

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
            <div className="todo-list">
                <h3>{this.props.title}</h3>
                <ul>
                    {this.state.todos.length > 0 && this.state.todos.map((todo: ITodo) => {
                            return (
                                <li key={todo.id}>{todo.task}</li>
                            )
                        })
                    }
                </ul>
                <input type="text" onChange={(e) => this.setState({inputText: e.target.value})} value={this.state.inputText} />
                <button onClick={() => this.submitTodo()}>Submit</button>
            </div>
        )
    }
}
