import React from 'react';  

// const square = (props) => {
//   console.log(props);

// return <button type="button"> { props.value } </button>  // object.value = props.value
  
// };

// or

const square = ({ value, onClick, isWinningSquare}) => {

  console.log('square rerender');
  
  return ( 
  <button
   type="button" 
  //  className='square' 
   onClick={onClick} 
   className = {`square ${isWinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange'}`}>
  { value } 
  </button>
  );
};

export default square;