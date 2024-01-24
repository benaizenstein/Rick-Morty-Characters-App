import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import ISearch from '../../interfaces/Search';
import { metadata } from '../../config/metadata';


const Search: React.FC<ISearch> = ({ onSearchChange }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onSearchChange(searchQuery);
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, onSearchChange]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchQuery(value);
    };

    return (
        <div>
            <TextField label={metadata.searchTxt} variant="outlined" value={searchQuery} onChange={handleSearch} />
        </div>
    );
};

export default Search;
