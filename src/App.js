import './App.css';

import Board from "./Board";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Chess board in React</h1>
      <div className="chessboard">
        <Board rows={8} cols={8} />
      </div>
    </div>
  );
}