import { Pagination } from '@mui/material';
import ICustomPagination from '../../interfaces/Pagination';
import React from 'react';



const CustomPagination: React.FC<ICustomPagination> = ({ currentPage, totalPageCount }) => {
    const handleChange = () => {
        //handle pagination 
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
