import { XWingService } from '../services/x-wing.service';
import { Request, Response } from 'express';
import { XWingShipyard } from '../shipyard';
import { EngineType, HyperdriveEngine, IonEngine } from '../ship/engine';

const xWingService = new XWingService();

export const getXWings = (req: Request, res: Response) => {
    res.json(xWingService.getAll());
};

export const createXWing = (req: Request, res: Response) => {
    const xWing = new XWingShipyard()
        .installEngine(buildEngine(req.body.engine))
        .sprayColor(req.body.color)
        .constructShip();

    const newXWing = xWingService.add(xWing);
    res.json(newXWing);
};

function buildEngine(engineType: EngineType): HyperdriveEngine | IonEngine {
    switch (engineType) {
        case EngineType.Hyperdrive:
            return new HyperdriveEngine();
        case EngineType.Ion:
            return new IonEngine();
    }
}
