import { PersonController, PersonService } from './people';
import { StarshipController, StarshipService } from './starship';

export default class StarWarsApp {

    private starshipController: StarshipController;
    private personController: PersonController;

    constructor() {
        this.initStarships();
        this.initPeople();
    }

    render() {
        this.starshipController.showData();
        this.personController.showData();
    }

    private initStarships() {
        const starshipService = new StarshipService();
        this.starshipController = new StarshipController(starshipService);
    }

    private initPeople() {
        const peopleService = new PersonService();
        this.personController = new PersonController(peopleService);
    }

}