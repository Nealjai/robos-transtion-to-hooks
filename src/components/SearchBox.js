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
                onChange={searchChange} //onChange is a HTML event
            />
        </div>
    );
    
}

export default SearchBox;