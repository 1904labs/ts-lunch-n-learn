import React, {useState} from 'react';
import './App.scss';

interface ICommentCardProps {
    name: string;
    ts: string;
    comment: string;
    imgUrl: string;
}

export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Counter />
            </div>
        )
    }
}

const Counter = () => {
    const [ name, setName ] = useState('AJ');
    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} value={name} />
            <div>
                {name}
            </div>
        </div>
    )
}

