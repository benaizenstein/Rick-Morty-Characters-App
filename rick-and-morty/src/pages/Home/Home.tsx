import React, { useEffect, useState } from 'react';
import { Character } from '../../interfaces/Character';
import { getCharacters } from '../../api/api';

const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      const charactersData = await getCharacters();
      setCharacters(charactersData.results)
    } catch (error) {
      console.error('Error loading characters:', error);
    }
  };
  return (
    <p>Home Page</p>
  );
};

export default HomePage;
