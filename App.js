import logo from './logo.svg';
import './App.css';
import Box from './Component/Box'
import Board from './Component/Board'
import Score from './Component/Score';
import React,{useState} from 'react';
import ResetButton from './Component/ResetButton';

function App() {
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],

]
  const [board,setboard] = useState(Array (9) .fill(null))
  // const board = ["X", "X", "X" ,"X", "X","X","X" ,"X" ,"X"]
  const [Xvalue,setXvalue] = useState (true);
  const [scores, setscores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver,setgameOver] = useState(false);

  const handleBoxClick = (boxId) =>{
    const updateBoard = board.map ((value , id) =>{
      if(id === boxId) {
        return  Xvalue === true ? "X" : "O";
      }
      else{
        return value;
      }
    })

    const winner =checkWinner(updateBoard);
 if(winner){
    if (winner === "X") {
      let {xScore} = scores;
      //for adding the scores we put the xscore code below
      xScore =xScore +1;
      setscores ({...scores , xScore})
    }  
    else{
      let {oScore} = scores;
      oScore =oScore +1;
      setscores ({...scores , oScore})
    }
 }
  setboard(updateBoard);
    setXvalue(!Xvalue);
    // checkWinner(updateBoard);


  }

  const checkWinner = (board) =>{
    for (let i=0; i<win.length;i++){
      const [A,B,C] = win [i];
      if (board [A] && board[A] === board[B]  &&  board[B]  === board [C]){
        console.log(board [A]);
        // alert ("X is the winner !!!")
        setgameOver (true);
        return board [A]
      }
       
      // // else{
      //   return console.log(board[B])
      // }
    }
  }
  const resetButton = () =>{
    setgameOver (false) ;
    setboard (Array (9) .fill(null));
  }
  

  return (
    <div className="App">
      <h1 className='title'>Tic-Tac-Toe</h1>
      <Score scores={scores} Xvalue={Xvalue}></Score>
      <Board board={board} onClick={gameOver ? resetButton : handleBoxClick}></Board>
      <ResetButton resetButton={resetButton}></ResetButton>
    </div>
  );
}

export default App;
