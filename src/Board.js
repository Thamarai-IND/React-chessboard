import { chessData } from "./data";

const Board = ({ rows, cols }) => {
  return (
    <>
      {/* logic implementation */}
      {[...Array(rows)].map((row, rowIdx) => {
        return (
          <div key={rowIdx} className="grid">
            {[...Array(cols)].map((col, colIdx) => {
              return (
                <div
                  key={colIdx}
                  className={`sub-grid ${
                    (rowIdx + colIdx) % 2 === 0 ? "even" : "odd" /* black and white implementation */
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: chessData[rowIdx] && chessData[rowIdx][colIdx] // Integrating chess pieces into board with 8 * 8 
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Board;