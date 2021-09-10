import { XWingShipyard, TieFighterShipyard } from './shipyard';
import * as express from 'express';
import { HyperdriveEngine, IonEngine } from './ship/engine';
import { Color } from './ship/starship';
import * as xWingController from './controllers/x-wing.controller';
import * as tieFighterController from './controllers/tie-fighter.controller';

const xwing = new XWingShipyard()
    .installEngine(new HyperdriveEngine())
    .sprayColor(Color.Red)
    .constructShip();

const tieFighter = new TieFighterShipyard()
    .installEngine(new IonEngine())
    .sprayColor(Color.Gray)
    .constructShip();

console.log(`Constructed a ${xwing.name} in a ${xwing.color} color.`);
console.log(`Constructed a ${tieFighter.name} in a ${tieFighter.color} color.`);


/**
 * NodeJS configuration
 */
const app = express();
app.set('port', process.env.PORT ?? 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * NodeJS routes
 */
app.get('/xwings', xWingController.getXWings);
app.post('/xwings', xWingController.createXWing);

app.get('/ties', tieFighterController.getTieFighters);
app.post('/ties', tieFighterController.createTieFighter);

export default app;