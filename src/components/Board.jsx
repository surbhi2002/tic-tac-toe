import React from 'react';  
// for functionality use hook and key words start with 'use'

import Square from './Square';

const Board = ( {board, handleSquareClick, winningSquares}) =>{  


  const renderSquare = (position) => {

    const isWinningSquare = winningSquares.includes(position)

    return ( 
    <Square 
    value={board[position]} 
    onClick={() => handleSquareClick(position)} 
    isWinningSquare={isWinningSquare}
    />
    );
  };

  return ( 
    <div className='board'>
    <div className='board-row'>

       {/* <Square value={0} /> 
       <Square value={1} />
        <Square value={2} />  */}

        { renderSquare(0) }
        { renderSquare(1) }
        { renderSquare(2) }

      </div>

      <div className='board-row'>
        {/* <Square value={board[3]} />
        <Square value={board[4]} />
        <Square value={board[5]} /> */}

        { renderSquare(3) }
        { renderSquare(4) }
        { renderSquare(5) }
      </div>

      <div className='board-row'>
        { renderSquare(6) }
        { renderSquare(7) }
        { renderSquare(8) }
      </div>
    </div>
  );
};

export default Board;

