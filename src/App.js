import React, {Component} from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
// import { robots } from "./robots"; An Artifical file for set up
import './App.css';
import Scroll from './Scroll';


class App extends Component {
    constructor() {
        super();  // Must call parent class constructor
        this.state = {  // Initializing state
            robots: [],  // Key: robots, Value: robots array from import
            searchfield: ""  // Key: searchfield, Value: empty string
        }
    }

    //becoz it's part of React, no need the arrow function
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) //one line function
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());      
        })

        if (this.state.robots.length === 0) {
            return <h1> Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    {/*Any time this box changes, want it to trigger the function onSearchChange()*/}
                    <SearchBox searchChange={this.onSearchChange}/> 
                    <Scroll> 
                        <CardList robots={filteredRobots}/> 
                    </Scroll>

                </div>
            );
        }
    }
}

export default App;