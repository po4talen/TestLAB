import { Page, test as customTest } from '@playwright/test';
import { FormAuthentication } from "../pageObject/FormAuthentication";
import { MainPage } from "../pageObject/MainPage";
import { MultipleWindow } from "../pageObject/MultipleWindow";
import { FileUpload } from '../pageObject/FileUpload';
import { BrokenImages } from '../pageObject/BrokenImages';

export const Front = (page: Page) => ({
    mainPage: new MainPage(page),
    formAuthentication: new FormAuthentication(page),
    multipleWindow: new MultipleWindow(page),
    fileUpload: new FileUpload(page),
    brokenImages: new BrokenImages(page),
  
});

const test = customTest.extend<{
    front: ReturnType<typeof Front>
}>({
    front: async ({ page }, use) => {
        await use(Front(page));
    }
});
export default test;
