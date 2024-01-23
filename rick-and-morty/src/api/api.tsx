import axios from 'axios';
import IGetCharactersResponse from '../interfaces/GetCharactersResponse';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharactersResponse = async (page: number = 1, searchQuery: string = "", filterValue: string = ""): Promise<IGetCharactersResponse> => {
    console.log(page, searchQuery, filterValue)
    try {
        const response = await axios.get(`${API_BASE_URL}/character`, {
            params: {
                page,
                name: searchQuery,
                status: filterValue,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};