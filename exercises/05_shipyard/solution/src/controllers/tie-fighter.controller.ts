import { Request, Response } from 'express';
import { TieFighterShipyard } from '../shipyard';
import { EngineType, IonEngine } from '../ship/engine';
import { TieFighterService } from '../services/tie-fighter.service';
import { Color } from '../ship/starship';

const tieFighterService = new TieFighterService();

export const getTieFighters = (req: Request, res: Response) => {
    res.json(tieFighterService.getAll());
};

export const createTieFighter = (req: Request, res: Response) => {
    try {
        const engine = buildEngine(req.body.engine);
        const color = getColorFromRequest(req);
        const tieFighter = new TieFighterShipyard()
            .installEngine(engine)
            .sprayColor(color)
            .constructShip();

        const newTieFighter = tieFighterService.add(tieFighter);
        res.json(newTieFighter);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

function buildEngine(engineType: EngineType): IonEngine {
    switch (engineType) {
        case EngineType.Hyperdrive:
            throw new Error('Hyperdrives are not suitable for TIEs');
        case EngineType.Ion:
            return new IonEngine();
    }
}

function getColorFromRequest(req: Request) {
    const color = req.body.color;
    if (isColorValid(color)) {
        return color;
    } else {
        throw new Error('The Empire only desires gray TIE Fighters');
    }
}

function isColorValid(color: Color) {
    return color === Color.Gray;
}
