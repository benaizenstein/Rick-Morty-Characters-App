import React, { useEffect, useState } from 'react';
import { getCharactersResponse } from '../../api/api';
import ICharacter from '../../interfaces/Character';
import CharacterTable from '../../components/CharacterTable/CharacterTable';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';
import CustomPagination from '../../components/Pagination/Pagination';
import Button from '@mui/material/Button';

const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('');

  useEffect(() => {
    loadCharacters();
  }, [currentPage, searchValue, filterValue]);

  const loadCharacters = async () => {
    try {
      const charactersData = await getCharactersResponse(currentPage, searchValue, filterValue);
      setTotalPages(charactersData.info.pages)
      setCharacters(charactersData.results)
    } catch (error) {
      console.error('Error loading characters:', error);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setCurrentPage(1)
  };

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
    setCurrentPage(1)
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClear = () => {
    setSearchValue('');
    setFilterValue('');
    setCurrentPage(1);
  };

  //Map filters from config 

  return (
    <>
      <Search onSearchChange={handleSearchChange} />
      <Filter onFilterChange={handleFilterChange} defaultLabel={'bla'} labels={['1', '2', '3', '4', '5', '6']} />
      <Button variant="outlined" color="primary" onClick={handleClear}>
        Clear
      </Button>
      <CharacterTable characters={characters} key={'CharacterTableHome'} />
      <CustomPagination currentPage={currentPage} totalPageCount={totalPages} onPageChange={handlePageChange} />
    </>
  );
};

export default HomePage;
