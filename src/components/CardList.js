// import React from 'react';
// import Card from './Card';

// const CardList = ({ robots }) => {
//   return (
//     <div>
//       {
//         robots.map((user, i) => {
//           return (
//             <Card
//               key={i}
//               id={robots[i].id}
//               name={robots[i].name}
//               email={robots[i].email}
//               />
//           );
//         })
//       }
//     </div>
//   );
// }

// export default CardList;

// ========new code==============
import React from 'react';
import Card from './Card'; 

const CardList = ({robots}) => {
  return (
    <div>
      {
          robots.map((user, i) => {
          return (
            <Card 
            key={i} 
            id={user['id']} 
            name={user["name"]} 
            email={user["email"]}
            /> 
          ); //the things wrapped by {} are JS here, but the entire thing is JSX
        })
      }
    </div>
  )

  // return (
  //   <div>
  //     <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} /> 
  //     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} /> 
  //   </div>
  // )



}
export default CardList;




