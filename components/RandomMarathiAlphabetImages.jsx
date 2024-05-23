import React, { useState, useEffect, useContext } from 'react';
// import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { marathiAlphabets } from '../lib/marathiAlphabets';
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { CharacterData } from '../lib/context/MarathiCharContext';

const getRandomCharacter = () => {
  const vowelsOrConsonants =
    Math.round(Math.random()) === 0 ? 'vowels' : 'consonants';
  const filteredJson = marathiAlphabets[vowelsOrConsonants];
  const jsonLength = Object.keys(filteredJson).length;
  const randomCharIndex = Math.floor(Math.random() * jsonLength) + 1;
  return filteredJson[randomCharIndex];
};

const RandomMarathiAlphabetImages = ({ handleClear }) => {
  const { character, setCharacter } = useContext(CharacterData);

  useEffect(() => {
    setCharacter(getRandomCharacter());
  }, []);

  const handleRefresh = () => {
    setCharacter(getRandomCharacter());
    handleClear();
  };

  if(!character) return;

  return (
    <div className='w-full'>
      {character && (
        <div className="flex items-center">
          <h3 className="text-[70px] marathi-regular mr-6 ml-3">{character.char}</h3>
          <p className='text-[24px] mr-[5px]'>[{character.pronunciation}]</p>
          {/* <HiMiniSpeakerWave size={30}/> */}
          <button className="ml-auto" onClick={handleRefresh}>
            <IoArrowForwardCircleSharp size={30} />
          </button>
        </div>
      )}
      {/* {imageSrc && <img className="image" src={imageSrc} alt="Randomly picked" />} */}
    </div>
  );
};

export default RandomMarathiAlphabetImages;
