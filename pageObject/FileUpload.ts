import { MainPage } from "./MainPage";
import { expect } from "@playwright/test";

export class FileUpload extends MainPage {
    fileUploadLink = this.page.locator('a[href="/upload"]');
    heading = this.page.locator('h3');
    chooseFile = this.page.locator('#file-upload');
    uploadButton = this.page.locator('#file-submit');
    fileUploadedTitle = this.page.locator('h3');


    async clickOnfileUploadLink() {
        console.log('click On File Uploader Link')
        await this.fileUploadLink.click();
        await this.page.waitForLoadState();
    }

    async pageOpened() {
        console.log('Checking: FileUploader Page is Opened');
        await expect(this.heading).toHaveText('File Uploader');
    }

    async setFileForUpload(path: string) {
        console.log('Set File for upload');
        await this.chooseFile.setInputFiles(path);
    }

    async clickUploadButton() {
        console.log('Click Upload button');
        await this.uploadButton.click();
    }

    async fileUploaded() {
        console.log('Checking: File is uploaded');
        await expect(this.fileUploadedTitle).toHaveText('File Uploaded!');
    }

}