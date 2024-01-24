import { useState } from 'react';
import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import IFilter from '../../interfaces/Filter';

const Filter: React.FC<IFilter> = ({ label, options, type, onFilterChange }) => {
    const [filterQuery, setFilterQuery] = useState<string>('');

    const handleFilterChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value;
        setFilterQuery(value);
        onFilterChange(type, value);
    };

    return (
        <FormControl variant="outlined" style={{ marginLeft: '16px' }}>
            <InputLabel id="status-select-label">{label}</InputLabel>
            <Select
                labelId="status-select-label"
                id={label}
                value={filterQuery}
                label={label}
                onChange={handleFilterChange}
            >
                <MenuItem value="" disabled>
                    Select {label}
                </MenuItem>
                {options.map((option) => (
                    <MenuItem value={option} key={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Filter;
