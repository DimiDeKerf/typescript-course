import { Color } from '../ship/starship';
import { Engine } from '../ship/engine';

export interface Shipyard<T> {

    installEngine(engine: Engine): Shipyard<T>;
    sprayColor(color: Color): Shipyard<T>;
    constructShip(): T;

}