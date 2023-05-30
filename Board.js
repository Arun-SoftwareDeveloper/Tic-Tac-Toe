import React from 'react';
import '../Style/Board.css';
import Box from './Box';

function Board({board,onClick}) {

  return (
    <div className='board'>
      {board.map ((value,id) =>{
                return  <Box
                value={value}
                onClick={() => value === null && onClick(id)}
              ></Box>
      })}
       
        

    </div>
  )
}

export default Board;