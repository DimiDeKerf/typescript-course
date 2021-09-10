import { Starship } from './starship';
import { EntityService } from '../core';

export class StarshipService extends EntityService<Starship> {

    constructor() {
        super('starships');
    }

}
