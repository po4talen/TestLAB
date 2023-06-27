import { MainPage } from "./MainPage";
import { expect } from "@playwright/test";


export class BrokenImages extends MainPage {
    brokenImagesUrl = this.page.locator('a[href="/broken_images"]');
    heading = this.page.locator('h3');
    imagesSrcList = this.page.locator('.example img');


    async clickOnfileUploadLink() {
        console.log('click On Broken Images Link')
        await this.brokenImagesUrl.click();
        await this.page.waitForLoadState();
    }

    async pageOpened() {
        console.log('Checking: Broken Images Page is Opened');
        await expect(this.heading).toHaveText('Broken Images');
    }

    async checkBrokenImages() {
        for (const element of await this.imagesSrcList.all()) {
            const el = await element.getAttribute('src');
            const response = await this.page.request.fetch(`https://the-internet.herokuapp.com/${el}`, {
                method: 'get',
            })
            // if (response.status() === 200) {
            //     console.log(`image ${el} is OK`)

            // } else if (response.status() === 404) {
            //     console.log(`ALERT: image ${el} is Broken`)
            // }
            await expect.soft(response.status(), `ALERT: image ${el} is Broken`).toBe(200);
        }
    }
}
