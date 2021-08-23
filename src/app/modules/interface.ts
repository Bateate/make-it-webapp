



export interface IAppState {
    loading?: boolean;
    favoritesMovies?: Array<CardInterface>;
    allMovies?: Array<CardInterface>;
    currentMovie?: CardInterface;
    session?: any;
}

export interface CardInterface {
    id?: string,
    name?: string,
    lenguage?: string,
    genres?: Array<string>,
    runtime?: number,
    premiered?: string,
    rating?: Array<{
        average?: number
    }>,
    image?: {
        medium?: string,
        original?: string
    }, 
    summary?: string,
    officialSite?: string
}
