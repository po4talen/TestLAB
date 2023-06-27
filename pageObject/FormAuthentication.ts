import { MainPage } from "./MainPage";
import { expect } from "@playwright/test";

export class FormAuthentication extends MainPage {

    formAutehtication = this.page.locator('a[href="/login"]');
    heading = this.page.locator('h2');
    loginInput = this.page.locator('input[id="username"]');
    passwordInput = this.page.locator('input[id="password"]');
    loginButton = this.page.locator('button[type="submit"]');
    loggedInMsg = this.page.locator('div[id="flash-messages"]');


    async clickOnFormAutehticationLink() {
        console.log('click On Form Autehtication Link')
        await this.formAutehtication.click();
        await this.page.waitForLoadState();
    }

    async pageOpened() {
        console.log('Checking: PageLoginPage is Opened');
        await expect(this.heading).toHaveText('Login Page');
    }

    async enterLogin(login: string){
        console.log(`Enter login ${login}`);
        await this.loginInput.type(login);
    }

    async enterPassword(password: string){
        console.log(`Enter password ${password}`);
        await this.passwordInput.type(password);
    }

    async clickLoginButton(){
        console.log(`Click Login button`);
        await this.loginButton.click();
    }

    async successLogedIn(){
        console.log(`Checking: Success logged in`);
        await expect(this.loggedInMsg).toContainText('You logged into a secure area!');
    }

}
