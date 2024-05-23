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
      <div className='flex justify-center w-full overflow-hidden border-[2px]'>
        <CanvasDraw 
          ref={canvasRef}
          brushRadius={2}
          lazyRadius={0}
          brushColor="#000" 
        />
      </div>

      <br/>
      <div className='w-full flex justify-center'>
        <button className="button" onClick={handleClear}>Clear</button>
        <button className="button" onClick={handleUndo}>Undo</button>
      </div>
    </div>
  );
};

export default DrawingPad;