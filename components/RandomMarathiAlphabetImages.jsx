import React, { useState, useEffect } from 'react';
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { marathiAlphabets } from '../lib/marathiAlphabets';
import { IoArrowForwardCircleSharp } from "react-icons/io5";

// const getRandomImage = () => {
//   const imageNumber = Math.floor(Math.random() * 48) + 1; // Random number between 1 and 48 inclusive
//   return `/assets/images/pages/writing/marathi-alphabets/${imageNumber}.png`;
// };

const getRandomCharacter = () => {
  const vowelsOrConsonants =
    Math.round(Math.random()) === 0 ? 'vowels' : 'consonants';
  const filteredJson = marathiAlphabets[vowelsOrConsonants];
  const jsonLength = Object.keys(filteredJson).length;
  const randomCharIndex = Math.floor(Math.random() * jsonLength) + 1;
  return filteredJson[randomCharIndex];
};

const RandomMarathiAlphabetImages = ({ handleClear }) => {
  const [character, setCharacter] = useState('');

  useEffect(() => {
    setCharacter(getRandomCharacter());
  }, []);

  const handleRefresh = () => {
    setCharacter(getRandomCharacter());
    handleClear();
  };

  return (
    <div className='w-full'>
      {character && (
        <div className="flex items-center">
          <h3 className="text-[70px] marathi-regular mr-6">{character.char}</h3>
          <p className='text-[24px] mr-[5px]'>[{character.pronunciation}]</p>
          <HiMiniSpeakerWave size={30}/>
          <button className="ml-auto" onClick={handleRefresh}>
            <IoArrowForwardCircleSharp size={30} />
          </button>
        </div>
      )}
      {/* {imageSrc && <img className="image" src={imageSrc} alt="Randomly picked" />} */}

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image {
          height: 200px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default RandomMarathiAlphabetImages;
