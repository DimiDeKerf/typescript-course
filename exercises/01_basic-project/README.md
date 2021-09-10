# Basic project
Time to get ourselves familiarized with the configuration of TypeScript and how to set it up using a small project.

## Prerequisites
Have `node` and `npm` installed. You can find it [here](https://nodejs.org/en/download/).

## Install TypeScript
First things first, we need to install TypeScript so we can use the TypeScript compiler.
```
npm install -g typescript
```
Check if the compiler is installed correctly by logging the version of the compiler. If everything works you should see the version.
```
tsc -v
```

## Create our first app
Add an `app.ts` file to the exercise folder.
### Writing TypeScript
Let's play around by creating some constants and logging their values. Add a `firstName` and `lastName` constant, initialise them and log their values afterwards.
### Compile our project
Open up your cmd or Terminal and navigate to the exercise folder. Run `tsc app.ts` to compile the project. An `app.js` file should appear that can be run by a JavaScript engine.
### Running the app
Since we've installed node, we can use it to run the app. While still being in the exercise folder, execute the following command:
```
node app.js
```
This will run our app and the log should popup in the console. Great job!
### Compiler flags
We would like to have the output of our compiler in a separate `dist` folder. Find a way using the command line to achieve this. The available compiler options are available [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

## Setup npm
Our app now works on our machine, but we would like to have it working on different environments. This is where `npm` comes into play.

We'll be using `npm` to manage our dependencies. Initialse `npm` using following command in the exercise folder:
```
npm init -y
```
This will generate a `package.json` file with the default settings (the `-y` or yes flag).

## Setup TypeScript
### Installing TypeScript dependency
With npm in place, we can start configuring TypeScript. Install TypeScript as a devDependency:
```
npm install typescript --save-dev
```
We're saving TypeScript as a devDependency because we'll be only using it for development. It won't be included in the final build when we want to deploy our app.
### Configure tsconfig.json
Using the command line to instruct the TypeScript compiler what to do worked for now, but the command can become pretty long and difficult to manage with more options. The `tsconfig.json` is the perfect place to store the configuration for the compiler. Add the file by running following command:
```
tsc --init
```
Open the new `tsconfig.json` file and configure it so the output of the compiler will be placed in the same `dist` folder as before.
### Add a npm script
Npm scripts provide us with an easy way to trigger tasks using npm. Inside the `package.json` file, add a new task under `scripts`. Give it the name "start" and let it trigger our TypeScript compiler by running `tsc`. Because we have TypeScript installed as a devDependency, we can call it from within our npm script. Run the npm script and check if the compiler kicks in:
```
npm start
```
The result should be the same, the `app.js` file appears in the `dist` folder and is ready to be executed!