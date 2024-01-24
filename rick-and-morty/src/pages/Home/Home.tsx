import React, { useEffect, useState } from 'react';
import { getCharactersResponse } from '../../api/api';
import ICharacter from '../../interfaces/Character';
import CharacterTable from '../../components/CharacterTable/CharacterTable';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';
import CustomPagination from '../../components/Pagination/Pagination';
import Button from '@mui/material/Button';
import { metadata } from '../../config/metadata';



const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filtersValue, setFiltersValue] = useState<{ gender: string; status: string; }>(metadata.defaultFilter);

  useEffect(() => {
    loadCharacters();
  }, [currentPage, searchValue, filtersValue]);

  const loadCharacters = async () => {
    try {
      const charactersData = await getCharactersResponse(currentPage, searchValue, filtersValue);
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

  const handleFilterChange = (type: string, value: string) => {
    let mutableFilters: { [key: string]: string } = { ...filtersValue };
    mutableFilters[type] = value
    setFiltersValue(mutableFilters as { gender: string; status: string });
    setCurrentPage(1)
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClear = () => {
    setSearchValue('');
    setFiltersValue(metadata.defaultFilter);
    setCurrentPage(1);
  };

  return (
    <>
      <Search onSearchChange={handleSearchChange} />
      {
        metadata.filters.map(filter => (
          <Filter
            key={filter.type}
            onFilterChange={handleFilterChange}
            type={filter.type}
            label={filter.label}
            options={filter.options}
          />
        ))
      }

      <Button variant="outlined" color="primary" onClick={handleClear}>
        Clear
      </Button>
      <CharacterTable characters={characters} key={'CharacterTableHome'} />
      <CustomPagination currentPage={currentPage} totalPageCount={totalPages} onPageChange={handlePageChange} />
    </>
  );
};

export default HomePage;
