import { MainPage } from "./MainPage";
import { Locator, expect } from "@playwright/test";

export class MultipleWindow extends MainPage {
    multipleWindow = this.page.locator('a[href="/windows"]');
    heading = this.page.locator('h3');
    clickhere = this.page.locator('a[href="/windows/new"]');
    newPageHeading = this.page.locator('h3');


    async clickOnMultipleWindowLink() {
        console.log('click On Form Autehtication Link')
        await this.multipleWindow.click();
        await this.page.waitForLoadState();
        // await this.page.pause();
    }

    async pageOpened() {
        console.log('Checking: Page Multiple window is Opened');
        await expect(this.heading).toHaveText('Opening a new window');
    }

    // async clickHereLink(context){
    //     console.log('Click Here link opened');
    //     const pagePromise = context.waitForEvent('page')
    //     await this.clickhere.click();
    //     const newPage = await pagePromise;
    //     return newPage;
    // }
    
    async clickHereLink(){
        console.log('Click Here link opened');
        await this.clickhere.click();
    }

    // async newPageIsOpened(page){
    //     console.log('Checking: New page is Opened');
    //     await expect(page.newPageHeading).toHaveText('New Window');
    // }
}