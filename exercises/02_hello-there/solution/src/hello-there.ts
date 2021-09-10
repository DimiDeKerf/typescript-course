describe('Hello World', () => {
    let helloThere: HelloThere;

    beforeEach(() => {
        helloThere = new HelloThere();
    });

    it('says hello world with no name', () => {
        expect(helloThere.hello()).toEqual('Hello there!')
    });

    it('says hello to bob', () => {
        expect(helloThere.hello('Bob')).toEqual('Hello Bob!')
    });

    it('says hello to sally', () => {
        expect(helloThere.hello('Sally')).toEqual('Hello Sally!')
    });
});

class HelloThere {
    hello(name = 'there'): string {
        return `Hello ${name}!`
    }
}
