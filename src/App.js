import logo from './logo.svg';
import Game from './TicTacToe/Game';
// import './App.css';
import Tic from './TicTacToe/Tic';

function App() {
  return (
    <div >
    {/* <div className="App" style={{textAlign:'center', backgroundColor:"#61dafb",  height: "40vmin"}}> */}
      <header className="App-header">
        <h1>Tac Tac Toe</h1> 
        {/* <Tic/>  */}
        <Game/>
      </header>
    </div>
  );
}

export default App;
