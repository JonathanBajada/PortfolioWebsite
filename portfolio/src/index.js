import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Card from './Components/Card';
import Nav from './Components/Navigation';

const App = () => {
    return (
        <div>
            <Nav/>
            <Header/>
            <Card script="Description">
                project 1
            </Card>

            <Card script="Description2">
                project 2
            </Card>

            <Card script="Description3">
                project 3
            </Card>
        </div>
    ); 
};

ReactDOM.render(<App/>, document.querySelector('#root'));