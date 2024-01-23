import Character from './Character';

interface Info {
    count: number;
    next: string;
    pages: number;
    prev: string;
}

export default interface IGetCharactersResponse {
    results: Character[];
    info: Info;
}
