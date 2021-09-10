import { EntityService } from '../core';
import { Person } from './person';

export class PersonService extends EntityService<Person> {

    constructor() {
        super('people');
    }
    
}
