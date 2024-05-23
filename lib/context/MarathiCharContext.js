import { createContext, useState } from 'react';

export const CharacterData = createContext(null);

function Context({ children }) {
  const [character, setCharacter] = useState(null);

  return (
    <CharacterData.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterData.Provider>
  );
}

export default Context;
