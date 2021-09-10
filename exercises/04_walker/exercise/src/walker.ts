class Walker {
    name;
    numberOfLegs;
    color;

    // TODO: convert to constructor assignment
    constructor(
        name,
        numberOfLegs,
        color?, // Color can either by gray or black.
    ) {
        this.name = name;
        this.numberOfLegs = numberOfLegs;
        this.color = color || 'gray';
    }

    getInfo() {
        return `The ${this.name} has ${this.numberOfLegs} legs`;
    }
}

// TODO; Define Manufacturer interface and have the kuat object below comply to it
interface Manufacturer { 

}

const kuat = {
    name: 'Kuat Drive Yards',
    owner: 'Kuat of Kuat',
    active: true,
    buildWalker: function (name, numberOfLegs) {
        return new Walker(name, numberOfLegs);
    } // TODO convert to arrow function
}

const walker = kuat.buildWalker('AT-AT', 4);
console.log(walker.getInfo());
