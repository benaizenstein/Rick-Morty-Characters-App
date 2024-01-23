import { useState } from 'react';
import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import IFilter from '../../interfaces/Filter';

const Filter: React.FC<IFilter> = ({ defaultLabel, labels, onFilterChange }) => {
    const [filterQuery, setFilterQuery] = useState<string>('');

    const handleFilterChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value;
        setFilterQuery(value);
        onFilterChange(value);
    };

    return (
        <FormControl variant="outlined" style={{ marginLeft: '16px' }}>
            <InputLabel id="status-select-label">{defaultLabel}</InputLabel>
            <Select
                labelId="status-select-label"
                id={defaultLabel}
                value={filterQuery}
                label={defaultLabel}
                onChange={handleFilterChange}
            >
                <MenuItem value="" disabled>
                    Select {defaultLabel}
                </MenuItem>
                {labels.map((label) => (
                    <MenuItem value={label} key={label}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Filter;
