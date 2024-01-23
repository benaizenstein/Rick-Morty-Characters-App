interface Origin {
    name: string;
    url: string;
}

interface Location {
    name: string;
    url: string;
}

interface Info {
    count: number;
    next: string;
    pages: number
    prev: string
}

export interface Character {
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


export interface GetCharactersResponse {
    results: Character[];
    info: Info
}

