import { Shipyard } from './shipyard';
import { TieFighter, Color } from '../ship/starship';
import { IonEngine } from '../ship/engine';

export class TieFighterShipyard implements Shipyard<TieFighter> {
   
    private tieFighter: TieFighter;

    constructor() {
        this.tieFighter = new TieFighter();
    }

    installEngine(engine: IonEngine): TieFighterShipyard {
        this.tieFighter.engine = engine;
        return this;
    }

    sprayColor(color: Color.Gray): TieFighterShipyard {
        this.tieFighter.color = color;
        return this;
    }

    constructShip(): TieFighter {
        return this.tieFighter;
    }
    
}