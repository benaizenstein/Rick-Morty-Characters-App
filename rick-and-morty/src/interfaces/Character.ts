interface Origin {
    name: string;
    url: string;
}

interface Location {
    name: string;
    url: string;
}

export default interface ICharacter {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}
