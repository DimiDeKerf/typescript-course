# Web app

A long time ago in a galaxy far, far away... 

There was need for a web application where someone can query the people and starships from the Star Wars saga.

## Prerequisites

Install the node dependencies by running `npm install` in the exercise folder.

## Goal
The webapp has to fetch the starships from an API and show them to the user.

## Step 1: Getting our data

### Starship
We want to fetch starships from an API, so we have to define an Interface to let our compiler know which properties the starship will have. Let's first have a look at an example of a starship that the API will return:
```json
{
    "name": "Star Destroyer",
    "model": "Imperial I-class Star Destroyer",
    "manufacturer": "Kuat Drive Yards",
    "cost_in_credits": "150000000",
    "length": "1,600",
    "max_atmosphering_speed": "975",
    "crew": "47,060",
    "passengers": "n/a",
    "cargo_capacity": "36000000",
    "consumables": "2 years",
    "hyperdrive_rating": "2.0",
    "MGLT": "60",
    "starship_class": "Star Destroyer",
    "pilots": [],
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/"
    ],
    "created": "2014-12-10T15:08:19.848000Z",
    "edited": "2014-12-20T21:23:49.870000Z",
    "url": "https://swapi.dev/api/starships/3/"
}
```
Create a `StarshipModel` interface with all the given properties above and provide a meaningful type for each property.

Since our app won't require all the properties, we can pick some of them that are interesting for us.
Create a `Starship` type with the following properties, based on the `StarshipModel`:
* name (string)
* manufacturer (string)
* crew (string)

### Starship Service
With the Starship in place, it's time to fetch the starships. We're going to use [Swapi](https://swapi.co/), a Star Wars API with lots of Star Wars data that we can call. To make the calls, we'll be using [Axios](https://github.com/axios/axios), a [Promise](https://basarat.gitbooks.io/typescript/docs/promise.html) based HTTP client.

#### Axios
Let's install Axios first by using npm:
```
npm install --save axios
```
Normally we're also want to install the TypeScript typings for a library or framework, for example `npm install --save-dev @types/axios`. But since Axios has its types built-in, we're good to go.

#### Calling the API
Create the `StarshipService` class. It should have a `get` function that will return an array of Starships. Since Axios is promise based, we have to wrap our array into a Promise, because the response will arrive in the future.

Inside this function we're going to call Swapi using `https://swapi.co/api/starships`. An example of using Axios goes as follows:

```javascript
import axios from 'axios';

axios.get<Customer>('https://my-endpoint/customers')
    .then(response => console.log(response.data));
```

## Step 2: Render the result

### Starship Controller
Create the `StarshipController` class. The controller will connect the data that we receive from the Starship service and renders the view. It's a simple representation of the Model-View-Controller Design Pattern.

The Starship controller will receive an instance of the `StarshipService` in its constructor. This way we omit the implementation details of the `StarshipService` and can straight use it. Mark the service as private.

Next up is a function that will get the data from the service and renders a list of all the starships. Be sure to try out the [async await](https://basarat.gitbooks.io/typescript/docs/async-await.html) keywords in order to write more cleaner code.

Once we have the data, we can start building up the list in HTML. Using a framework would be more convenient, but this is out of scope for this small app. With the native methods of JavaScript like `document.createElement`, `appendChild`, etc. we will be able to generate a simple list.
Loop over all the starships and render each one of them in a `li` element, inside of an `ul` element. Append the `ul` element to the starships container on our webpage.

## Step 3: Run the webapp

### Star Wars app
Create a class called `StarWarsApp`. In it's constructor, create both instances of the `StarshipService` and the `StarshipController`. Add a function called `render` that will render the startships in the controller.

### Run
Time to bootstrap our app. In the `index.ts` file, add following code to run our application:
```javascript
const run = () => {
    const app = new StarWarsApp();
    app.render();
}

run();
```
Open up your terminal or cmd and run `npm start`. This will compile our project, build our webapp and start up a web server so we can access our webapp on [http://localhost:8080/](http://localhost:8080/). When everything works, we should see a list of starships appearing on the webpage.

## Step 4: People
We would also like to see a list of people that are featured over the Star Wars saga. Repeat the process of fetching and rendering the starships, but this time for people. The people endpoint will return the following model:
```json
{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
}
```
This time, we are not interested when the person was created or edited. Omit these properties from the final `Person` type.

Keep in mind to reuse as much code as possible!

## Bonus Step 6: Connect to the Shipyard API
If you created the Shipyard API in exercise 4, than you can use it in this app. Fetch all the starhships from our API and render them on the page.
To create new ships, you can add a HTML form to the page where you can enter the specifics for that starship and send it to the API.

## Bonus Step 7: Spice things up!
We can now see our lists but they look a bit bland. Apply some CSS to the list to bring some styling in our webapp. You can also show more data in the list by adding more info about each starship to the list.