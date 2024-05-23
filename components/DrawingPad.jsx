import React, { useRef, useContext } from 'react';
import CanvasDraw from 'react-canvas-draw';
import RandomMarathiAlphabetImages from './RandomMarathiAlphabetImages';
import { CharacterData } from '../lib/context/MarathiCharContext';

const DrawingPad = () => {
  const { character } = useContext(CharacterData);
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
      <RandomMarathiAlphabetImages handleClear={handleClear} />
      <div className="relative flex justify-center w-full overflow-hidden border-[2px]">
        {character && <p className='h-full marathi-regular top-1/2 -translate-y-1/2 origin-center text-[320px] absolute opacity-10 -z-1'>{character.char}</p>}
        <div className='relative canvas-wrapper'>
          <CanvasDraw
            ref={canvasRef}
            brushRadius={2}
            lazyRadius={0}
            brushColor="#000"
          />
        </div>
      </div>

      <br />
      <div className="w-full flex justify-center">
        <button className="button" onClick={handleClear}>
          Clear
        </button>
        <button className="button" onClick={handleUndo}>
          Undo
        </button>
      </div>
    </div>
  );
};

export default DrawingPad;
