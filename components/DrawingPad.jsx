import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import RandomMarathiAlphabetImages from './RandomMarathiAlphabetImages';

const DrawingPad = () => {
  const canvasRef = useRef(null);

  const handleClear = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
    }
  };

  const handleUndo = () => {
    if (canvasRef.current) {
      canvasRef.current.undo();
    }
  };

  return (
    <div>
      <RandomMarathiAlphabetImages handleClear={handleClear}  />
      <CanvasDraw 
        ref={canvasRef}
        brushRadius={2}
        lazyRadius={0}
        canvasWidth={600}
        canvasHeight={600}
        brushColor="#000" 
      />

      <br/>
      <div style={{ maxWidth: '100vw', margin: '0 auto' }}>
        <button className="button" onClick={handleClear}>Clear</button>
        <button className="button" onClick={handleUndo}>Undo</button>
      </div>

      <style jsx global>{`
        .button {
          padding: 15px;
          font-size: 20px;
          &:first-of-type {
            margin-right: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default DrawingPad;