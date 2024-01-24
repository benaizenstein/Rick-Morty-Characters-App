import { Pagination } from '@mui/material';
import ICustomPagination from '../../interfaces/Pagination';
import React from 'react';

const CustomPagination: React.FC<ICustomPagination> = ({ currentPage, totalPageCount, onPageChange }) => {
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        onPageChange(value);
    };

    return (
        <Pagination
            count={totalPageCount}
            page={currentPage}
            onChange={handleChange}
            color="primary"
            showFirstButton
            showLastButton
        />
    );
};

export default CustomPagination;
