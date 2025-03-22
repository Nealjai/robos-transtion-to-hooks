import React from 'react'; //
import ReactDOM from 'react-dom'; //The new way to import createRoot:
// import { createRoot } from "react-dom/client"; //DOM is mainly for web, ReactNative for mobile etc
// import './index.css'; 
// import Card from './components/Card'; //this assume App is js if not specified
// import CardList from  './components/CardList';
import App from './App';
import 'tachyons'; //for the shortcut in css
import registerServiceWorker from './registerServiceWorker';
import { robots } from './robots'; //since it's not export default, we need to destructure

// const root = createRoot(document.getElementById('root'));
// root.render(<Hello />);

//========Hardcode way==============
// ReactDOM.render(
//         <div>
//          {/* -> this is a JSX syntax */}
//             <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//             <Card id= {robots[1].id} name={robots[1].name} email={robots[1].email} /> 
//             <Card id= {robots[2].id} name={robots[2].name} email={robots[2].email} /> 
             
//         </div>
             
    
//     , document.getElementById('root'));
// registerServiceWorker();


//=======Dynamic code==============
ReactDOM.render(
            <App robots={robots}/>
    , document.getElementById('root'));
// registerServiceWorker();

