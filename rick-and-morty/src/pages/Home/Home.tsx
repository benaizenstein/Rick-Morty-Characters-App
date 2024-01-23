import React, { useEffect, useState } from 'react';
import { getCharactersResponse } from '../../api/api';
import ICharacter from '../../interfaces/Character';
import CharacterTable from '../../components/CharacterTable/CharacterTable';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';

const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);

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
  //Map filters from config 
  return (
    <>
      <Search />

      <Filter defaultLabel={'bla'} labels={['1', '2', '3', '4', '5', '6']} />
      <Filter defaultLabel={'bla'} labels={['1', '2', '3', '4', '5', '6']} />
      <CharacterTable characters={characters} key={'CharacterTableHome'} />
    </>
  );
};

export default HomePage;
