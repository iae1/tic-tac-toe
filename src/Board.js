// import './App.css';
import Row from './Row'

function Board() {
  return (
    <div className="Board">
      <table id="tic-tac-toe">
      {
        [
          <Row/>,
          <Row/>,
          <Row/>,
        ]
      }
      </table>
    </div>
  );
}

export default Board;
