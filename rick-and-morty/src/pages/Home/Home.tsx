import React, { useEffect, useState } from 'react';
import { getCharactersResponse } from '../../api/api';
import Character from '../../interfaces/Character';
import CharacterTable from '../../components/CharacterTable/CharacterTable';

const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[] | []>([]);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      const charactersData = await getCharactersResponse();
      setCharacters(charactersData.results)
    } catch (error) {
      console.error('Error loading characters:', error);
    }
  };
  return (
    <CharacterTable characters={characters} key={'CharacterTableHome'} />
  );
};

export default HomePage;
