
import { useState } from 'react';
import { TextField, } from '@mui/material';




const Search: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <TextField label="Search by name" variant="outlined" value={searchQuery} onChange={handleSearch} />
        </div>
    );
};

export default Search;
