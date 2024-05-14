import React, { useState, useEffect } from 'react';

const getRandomImage = () => {
  const imageNumber = Math.floor(Math.random() * 48) + 1; // Random number between 1 and 48 inclusive
  return `/assets/images/pages/writing/marathi-alphabets/${imageNumber}.png`;
};

const RandomImage: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    setImageSrc(getRandomImage());
  }, []);

  const handleRefresh = () => {
    setImageSrc(getRandomImage());
  };

  return (
    <div className='container'>
      {imageSrc && <img className="image" src={imageSrc} alt="Randomly picked" />}
      <button className="button" onClick={handleRefresh}>Refresh Image</button>

      <style jsx>{`
      .container {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .image {
        height:200px;
        margin-right: 20px;
      }
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

export default RandomImage;