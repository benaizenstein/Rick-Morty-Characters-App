import axios from 'axios';
import IGetCharactersResponse from '../interfaces/GetCharactersResponse';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharactersResponse = async (page: number = 1, searchQuery: string = "", filtersValue: Object = {}): Promise<IGetCharactersResponse> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/character`, {
            params: {
                page,
                name: searchQuery,
                ...filtersValue
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};

export const getCharacterFirstLastAppearance = async (characterId: number) => {
    try {
        const characterResponse = await axios.get(`${API_BASE_URL}/character/${characterId}`);
        const characterData = characterResponse.data;

        const episodesList = characterData.episode;

        if (episodesList && episodesList.length > 0) {
            episodesList.sort((a: any, b: any) => {
                const episodeNumberA = parseInt(a.split('/').pop(), 10);
                const episodeNumberB = parseInt(b.split('/').pop(), 10);
                return episodeNumberA - episodeNumberB;
            });

            const firstEpisodeId = episodesList[0].split("/").pop();
            const firstEpisodeResponse = await axios.get(`${API_BASE_URL}/episode/${firstEpisodeId}`);
            const firstEpisodeData = firstEpisodeResponse.data;

            const lastEpisodeId = episodesList[episodesList.length - 1].split("/").pop();
            const lastEpisodeResponse = await axios.get(`${API_BASE_URL}/episode/${lastEpisodeId}`);
            const lastEpisodeData = lastEpisodeResponse.data;

            return {
                characterName: characterData.name,
                firstAppearance: firstEpisodeData.episode,
                lastAppearance: lastEpisodeData.episode
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching character first and last appearance:', error);
        throw error;
    }
};