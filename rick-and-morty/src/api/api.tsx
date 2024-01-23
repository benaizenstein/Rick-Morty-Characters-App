import axios from 'axios';
import GetCharactersResponse from '../interfaces/GetCharactersResponse';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharactersResponse = async (): Promise<GetCharactersResponse> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/character`);
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};