import { Shipyard } from './shipyard';
import { XWing, Color } from '../ship/starship';
import { HyperdriveEngine, IonEngine } from '../ship/engine';

export class XWingShipyard implements Shipyard<XWing> {

    private xWing: XWing;

    constructor() {
        this.xWing = new XWing();
    }

    installEngine(engine: HyperdriveEngine | IonEngine): XWingShipyard {
        this.xWing.engine = engine;
        return this;
    }

    sprayColor(color: Color): XWingShipyard {
        this.xWing.color = color;
        return this;
    }

    constructShip(): XWing {
        return this.xWing;
    }

}