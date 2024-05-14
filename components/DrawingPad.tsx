import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';

const DrawingPad: React.FC = () => {
  const canvasRef = useRef<CanvasDraw>(null);

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  return (
    <div>
      <CanvasDraw 
        ref={canvasRef}
        brushRadius={2}
        lazyRadius={0}
        canvasWidth={800}
        canvasHeight={600}
        brushColor="#000" 
      />

      <br/>
      <div style={{maxWidth:'100vw', margin:"0 auto"}}>
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
        `}
      </style>
    </div>
  );
};


export default DrawingPad;