class Walker {
    constructor(
        public name: string,
        public numberOfLegs: number,
        public color = Color.gray,
    ) { }

    getInfo(): string {
        return `The ${this.name} has ${this.numberOfLegs} legs`;
    }
}

interface Manufacturer {
    name: string;
    owner: string;
    active: boolean;
    buildWalker: (name: string, numberOfLegs: number) => Walker;
}

enum Color {
    gray = 'gray',
    black = 'black',
}

const kuat: Manufacturer = {
    name: 'Kuat Drive Yards',
    owner: 'Kuat of Kuat',
    active: true,
    buildWalker: (name, numberOfLegs) => new Walker(name, numberOfLegs)
}

const walker = kuat.buildWalker('AT-AT', 4);
console.log(walker.getInfo());
