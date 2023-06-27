import { AbstractPage } from "./AbstractPage";
import { expect } from "@playwright/test";


export class MainPage extends AbstractPage {

    heading = this.page.locator('.heading');


    async open(path: string) {
        console.log(`Open Main page: '${path}'`)
        await super.open(path);
        await this.page.waitForLoadState();
        // await this.page.pause();
        }

    async isOpened() {
        console.log('Checking: MainPage Is Opened');
        await expect(this.heading).toHaveText('Welcome to the-internet')
       }

}