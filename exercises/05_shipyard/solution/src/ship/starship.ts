import { Engine } from './engine';

interface StarshipBlueprint {
    takeOff();
    land();
}

export abstract class Starship implements StarshipBlueprint {
    name: string;
    manufacturer: string;
    crew: string;
    engine: Engine;
    color: Color;

    takeOff() {
        console.log('All aboard');
    }

    land() {
        console.log('Deploy landing gear');
    }
}

export class XWing extends Starship {
    constructor() {
        super();
        this.name = 'X-Wing'
    }
}

export class TieFighter extends Starship {
    constructor() {
        super();
        this.name = 'TIE Fighter'
    }
}

export enum Color {
    Red = 'Red',
    Blue = 'Blue',
    Yellow = 'Yellow',
    Gray = 'Gray',
}