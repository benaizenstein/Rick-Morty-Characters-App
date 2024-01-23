import { useState } from 'react';
import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import IFilter from '../../interfaces/Filter';

const Filter: React.FC<IFilter> = ({ defaultLabel, labels }) => {
    const [filterQuery, setFilterQuery] = useState<string>('');

    const handleSearch = (event: SelectChangeEvent<string>) => {
        setFilterQuery(event.target.value);
    };

    return (
        <FormControl variant="outlined" style={{ marginLeft: '16px' }}>
            <InputLabel id="status-select-label">{defaultLabel}</InputLabel>
            <Select
                labelId="status-select-label"
                id={defaultLabel}
                value={filterQuery}
                label={defaultLabel}
                onChange={handleSearch}
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
