import Axios from 'axios';

export abstract class EntityService<T> {

    private readonly baseURL: string = 'https://swapi.dev/api/';

    constructor(
        private endPoint: string
    ) { }

    async get(): Promise<T[]> {
        const response = await Axios.get<SwapiResponse<T>>(`${this.baseURL}${this.endPoint}`)
        return response.data.results;
    }
}

interface SwapiResponse<T> {
    results: T[]
}