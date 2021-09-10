import { BaseController } from '../core';
import { PersonService } from './person.service';
import { Person } from './person';

export class PersonController extends BaseController<Person> {

    constructor(
        personService: PersonService
    ) {
        super(personService, 'people');
    }

    protected mapDataToItem(data: Person): string {
        return data.name;
    }

}