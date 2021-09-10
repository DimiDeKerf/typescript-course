import { StarshipService } from './starship.service';
import { BaseController } from '../core';
import { Starship } from './starship';

export class StarshipController extends BaseController<Starship> {
    
    constructor(
        starshipService: StarshipService
    ) {
        super(starshipService, 'starships');
    }

    protected mapDataToItem(data: Starship): string {
        return data.name;
    }

}