export abstract class StarshipService<T> {

    private data: T[] = [];

    getAll(): T[] {
        return this.data;
    }

    add(item: T): T {
        this.data.push(item)
        return item;
    }

}