export abstract class Engine {
    type: EngineType;
    power: number;
}

export class IonEngine extends Engine {
    fuelType: string;

    constructor() {
        super();
        this.type = EngineType.Ion;
    }
}

export class HyperdriveEngine extends Engine {
    private _capacity: number;

    constructor() {
        super();
        this.type = EngineType.Hyperdrive;
    }

    get capacity(): number {
        return this._capacity;
    }

    set capacity(capacity: number) {
        if (capacity < 0) {
            throw Error('Capacity must be greater than 0');
        }
        this._capacity = capacity;
    }

    activateHyperdrive() {
        this._capacity--;
    }
}

export enum EngineType {
    Ion = 'Ion',
    Hyperdrive = 'Hyperdrive'
}
