import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots"; An Artifical file for set up
import './App.css';
import Scroll from '../components/Scroll';

function App() {
    
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) //one line function
            .then(users => {setRobots(users)});
            console.log(count);
    },[count])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
        //passing the event.target.value 
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());      
    })

    // if (robots.length === 0) 
        
    if (!robots.length)  {
        return <h1> Loading</h1>
    } else {
        return (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <button onClick={()=>setCount(count+1)}>Click Me!</button>
                {/*Any time this box changes, want it to trigger the function onSearchChange()*/}
                {/* onSearchChange is the function passed as a prop */}
                <SearchBox searchChange={onSearchChange}/> 

                <Scroll> 
                    <CardList robots={filteredRobots}/> 
                </Scroll>

            </div>
        );
    }
}


export default App;


// --------WITHOUT Destruturing---------
//     render() {
//         const filteredRobots = this.state.robots.filter(robot => {
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());      
//         })

//         if (this.state.robots.length === 0) {
//             return <h1> Loading</h1>
//         } else {
//             return (
//                 <div className="tc">
//                     <h1 className="f1">Robofriends</h1>
//                     {/*Any time this box changes, want it to trigger the function onSearchChange()*/}
//                     <SearchBox searchChange={this.onSearchChange}/> 
//                     <Scroll> 
//                         <CardList robots={filteredRobots}/> 
//                     </Scroll>

//                 </div>
//             );
//         }
//     }
// }

