
import { useState } from 'react';
import { TextField } from '@mui/material';
import ISearch from '../../interfaces/Search';




const Search: React.FC<ISearch> = ({ onSearchChange }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchQuery(value);
        onSearchChange(value);
    };

    return (
        <div>
            <TextField label="Search by name" variant="outlined" value={searchQuery} onChange={handleSearch} />
        </div>
    );
};

export default Search;
