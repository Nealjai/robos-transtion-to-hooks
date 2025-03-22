import React, {Component} from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots } from "./robots";


class App extends Component {
    constructor() {
        super();  // Must call parent class constructor
        this.state = {  // Initializing state
            robots: robots,  // Key: robots, Value: robots array from import
            searchfield: ""  // Key: searchfield, Value: empty string
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());      
        } )
        return (
            <div className="tc">
                <h1>Robofriends</h1>


                {/*Any time this box changes, want it to trigger the function onSearchChange()*/}
                <SearchBox searchChange={this.onSearchChange}/> 

                <CardList robots={filteredRobots}/> 
                {/* this.state.robots is now passed down as props to CardList */}


            </div>
        );
    }
}

export default App;