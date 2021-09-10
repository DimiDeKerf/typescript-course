import { EntityService } from './entity.service';

export abstract class BaseController<T> {

    constructor(
        private entityService: EntityService<T>,
        private listId: string,
    ) {}

    async showData(): Promise<void> {
        const data = await this.entityService.get();
        this.renderData(data);
    }

    private renderData(data: T[]) {
        const listContainer = document.getElementById(this.listId);
        const items = data.map(data => this.mapDataToItem(data));
        const unorderedList = this.createUnorderedList(items);
        listContainer.appendChild(unorderedList);
    }

    protected createUnorderedList(items: string[]): HTMLElement {
        const list = document.createElement('ul');
        for (let item of items) {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(item));
            list.appendChild(listItem);
        }
        return list;
    }

    protected abstract mapDataToItem(data: T): string;

}