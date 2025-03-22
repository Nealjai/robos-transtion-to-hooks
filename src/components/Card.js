// import React from 'react';

// const Card = ({ name, email, id }) => {
//   return (
//     <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
//       <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
//       <div>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;
// ===========================NEW ==============
import React from 'react';

{/* this web will generate robot, type anything after org/ */}



const Card = ({name, email, id}) => {
  return (
    <div className=' tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5'>
      <img alt="photo" src={`https://robohash.org/${id}size=200x200`}></img>  

      {/* this size syntax (size=200x200) is special for this robot web */}

      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    
    </div>
  )
}

export default Card;