# Shipyard

In order to construct starships, we have to build a Shipyard app that will build starships for us.

## Prerequisites

Install the node dependencies by running `npm install` in the exercise folder.

## Goal
Being able to construct starships. Be aware to reuse and abstract code as much as possible and to organise your files in a logical way.

## Step 1: Define the Models

### Engines
Create the desired engines for the starships.

#### EngineType
EngineType is an Enum that represents the type of the engine. The EngineType Enum has the following values:
* ION ("Ion")
* HYPERDRIVE ("Hyperdrive")

#### IonEngine
The IonEngine class has following properties:

* type (enum of EngineType): has to be of type ION
* power (number)
* fuelType (string)

#### HyperdriveEngine
The HyperdriveEngine class has following properties:

* type (enum of EngineType): has to be of type HYPERDRIVE
* power (number)
* capacity (number): When setting the capacity, make sure that the value is higher than 0. Otherwise throw an error indicating that the capacity must be greater than 0.

### Starships
Create the desired starships.

#### Color
Color is an Enum that represents the color of the starship. The Color Enum has the following values:
* RED ("Red")
* BLUE ("Blue")
* Yellow ("Yellow")
* GRAY ("Gray")

#### XWing
Create a XWing class. The XWing has following properties:

* name (string): must be initialised to "X-wing"
* manufacturer (string)
* crew (string)
* engine (link to a specific engine)
* color (enum of Color)

To make sure that we can use the XWing, it has to adhere to an Interface that has two methods: `takeOff` and `land`. Create the interface and be sure that the XWing implements it.

#### TIEFighter
Create a TIEFighter class. The TIEFighter has following properties:

* name (string): must be initialsed to "TIE Fighter"
* manufacturer (string)
* crew (string)
* engine (link to a specific engine)
* color (enum of Color): only type of GRAY is allowed

To make sure that we can use the TIEFighter, it has to adhere to an Interface that has two methods: `takeOff` and `land`. Create the interface and be sure that the TIEFighter implements it.

## Step 2: Create starships using the Shipyard
The Shipyard will construct starships that we can use in our application. We have to be able to customise the starship by providing some properties. A clean way to achieve this is by applying the Builder Design Pattern.

### Shipyard
Add a Shipyard Interface that contains following methods:

* installEngine: used to set the engine
* sprayColor: used for applying the color
* constructShip: returns the instance of a starship

### XWingShipyard
Create a XWingShipyard class that implements the Shipyard Interface and implement the required methods.

* installEngine: accepts a HyperdriveEngine or IonEngine instance

### TIEFighterShipyard
Because we also want to construct TIE Fighters, add the TIEFighterShipyard class that implements the Shipyard Interface and implement the required methods.

* installEngine: only accepts an IonEngine instance
* sprayColor: only accepts the Gray color

## Step 3: Give our app a test run
Time to try out our Shipyard! Create both an instance of a XWing and a TIEFighter using the shipyards in the `app.ts` file and log some characteristics about them. Play around with organising your imports better for the different classes.

# Bonus: NodeJS App
## Step 4: Serve our app over a REST API using NodeJS and Express
We can make our app accessible for others by providing an API. In this way, others can create starships and query them.
The required dependencies for NodeJS are already in place, so we can start by configuring [Express](https://expressjs.com/) to build our API.

## Step 5: Configure Express

### App
Inside of our `app.ts` file, we're going to create an Express application. We can do this by using following code:
```javascript
const app = express(); // Create an Express app
app.set('port', process.env.PORT ?? 3000); // Set the port number, defaults to 3000
app.use(bodyParser.urlencoded({ extended: false })); // Setup parsing of request's body
app.use(bodyParser.json()); // Setup parsing of request's body
```

Next up, we will define how our API will look like. We provide routes that others can use in order to communicate with our API. An example of a route is as follows:
```javascript
const app = express();
app.get('my-route', (request, response) => { response.json([]); })
app.post('my-route', (request, response) => { response.json('Item created') })
```
Provide a GET and a POST route for both for the X-wing as the TIE Fighter that we can use later on. Give those endpoints the name of `xwings` and `ties`, respectively.

When everything has been set up, export the app constant in the end of our `app.ts` file. We will be using it to setup our server in the next part.

#### Server
Create a `server.ts` file and paste the following code in it:
```javascript
import app from './app';

const server = app.listen(app.get('port'), () => {
    console.log(
        "Shipyard app is running on http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
});

export default server;
```

The exact implementation will bring us out of scope, but the code is pretty self-explaining. We're using our new Express app and start listening for incoming request on the port number we've defined earlier. We can now try out our new API by running `npm run start-server`. This will both trigger the TypeScript compiler to compile our project on code changes as booting up our NodeJS app. Open up your browser and navigate to [http://localhost:3000](http://localhost:3000) to send the first request to the API.

## Step 6: Services

### XWingService
The service class will handle the data for us. Since we won't be using a database, we will cache the data in-memory by using an array of type XWing.

Create a XWingService class with the following requirements:

Properties:
* data: an empty array of XWings

Functions:
* getAll: returns a list of XWings
* add: accepts a XWing as parameter and adds it to the XWing array.

### TIEFighterService
The TIEFighterService has the same requirements as the XWingService, but this time we're handling with TIEFighter instances.

## Step 7: Controllers
To glue our API together with our services, we will be using controllers. A controller will consist of different functions that we will call to handle the request that we're receiving in our routes. Each function will handle the incomming requests and write away the result in the reponse. You may choose between a named or an anonymous function, just be sure to export them.

Hereby an example of an anonymous function:

```javascript
// customer-controller.ts

import { Request, Response } from 'express';

...

export const getCustomers = (req: Request, res: Response) => {
    res.json(customerService.getCustomers());
};

export const createCustomer = (req: Request, res: Response) => {
    const customerName = req.body.name;
    const newCustomer = new Customer(customerName);
    customerService.add(customer);
};
```

By exporting them, we can use those functions in our routes, for example:
```javascript
// app.ts

import { getCustomers, createCustomer } from './customer-controller';

...

app.get('/customers', getCustomers);
app.post('/customers', createCustomer);
```

### XWingController
Since we've defined two routes for our `xwings` endpoint, get and post respectively, we will define two functions.

Implement the required functions to both handle the GET and POST routes for the XWing. The GET function will call the XWingService to retrieve all the XWings, while the POST function will construct a XWing first using our Shipyard before sending that XWing instance to out XWingService. After a XWing has been constructed, the instance should be sent as a response to the client.

### TIEFighterController
We have to handle requests for our TIE Fighters too. Handle the GET and POST routes like before. Be aware that there are some restrictions when constructing TIE Fighters, such as the type of engine as the color. If the wrong value is requested, we have to throw an error.

## Step 8: Request away!
Now that everything is in place, we can start sending request to out API and verify if everything works as desired. You can use different tools to send requests to an API, such as [Postman](https://www.getpostman.com/).