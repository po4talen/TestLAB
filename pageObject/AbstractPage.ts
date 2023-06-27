import {Page} from '@playwright/test'

export class AbstractPage{
    page:Page;

    constructor(page) {
        this.page = page;
    }

    async open(path: string){
        await this.page.goto(path);     
    }

}