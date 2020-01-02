import React  from 'react';
import ReactDOM from 'react-dom';
 import TopTen from './components/topTen.jsx';
import { Component } from 'react';
import data from "../../seed_data.js"


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []

        }
    }
    
    componentDidMount() {
        fetch("http://localhost:8000/api/story")
        .then(response => response.json())
        .then(data => this.setState({data : data}));
    }

render() {
    return (
        <div><TopTen data ={this.state.data}/></div>
    )
}
}

// const App = (props) => <TopTen />;
export default App;
ReactDOM.render(<App />, document.getElementById('app'));

