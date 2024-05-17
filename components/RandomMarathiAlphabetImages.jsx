import React, { useState, useEffect } from 'react';

const getRandomImage = () => {
  const imageNumber = Math.floor(Math.random() * 48) + 1; // Random number between 1 and 48 inclusive
  return `/assets/images/pages/writing/marathi-alphabets/${imageNumber}.png`;
};

const RandomMarathiAlphabetImages = ({handleClear}) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    setImageSrc(getRandomImage());
  }, []);

  const handleRefresh = () => {
    setImageSrc(getRandomImage());
    handleClear();
  };

  return (
    <div className='container'>
      {imageSrc && <img className="image" src={imageSrc} alt="Randomly picked" />}
      <button className="button" onClick={handleRefresh}>Refresh Image</button>

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
        .button {
          padding: 15px;
          margin-left: 20px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default RandomMarathiAlphabetImages;