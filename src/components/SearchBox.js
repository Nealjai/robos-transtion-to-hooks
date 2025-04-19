// import React from 'react';

// const SearchBox = ({ searchfield, searchChange }) => {
//   return (
//     <div className='pa2'>
//       <input
//         className='pa3 ba b--green bg-lightest-blue'
//         type='search'
//         placeholder='search robots'
//         onChange={searchChange}
//       />
//     </div>
//   );
// }

// export default SearchBox;=

// ==================NEW=====================
import React from "react";

const SearchBox = ({Searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input  
                className="pa3 ba b--green bg-lightest-blue"
                type='search' 
                placeholder='search robots'
                onChange={searchChange} //onChange is a built-in HTML/React event that automatically receives an event parameter containing information about what changed.
                //Capture what user input and called the onSearchChange() on App.js
            />
        </div>
    );
    
}

export default SearchBox;