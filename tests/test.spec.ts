import { expect } from '@playwright/test';
import test from '../fixtures/fixtures'
import { data } from '../testData/testData';

test.beforeEach(async ({ front }) => {
  await front.mainPage.open(data.url);
  await front.mainPage.isOpened();
})

test('Check Login in authentication form', async ({ front }) => {
  await front.formAuthentication.clickOnFormAutehticationLink();
  await front.formAuthentication.pageOpened();
  await front.formAuthentication.enterLogin(data.userName);
  await front.formAuthentication.enterPassword(data.userPassword);
  await front.formAuthentication.clickLoginButton();
  await front.formAuthentication.successLogedIn();
});

test('Check Open multiple tabs', async ({ front, context}) => {
await front.multipleWindow.clickOnMultipleWindowLink();
await front.multipleWindow.pageOpened();
// Handling new pages. Start waiting for new page before clicking
const pagePromise = context.waitForEvent('page');
await front.multipleWindow.clickHereLink();
const newPage = await pagePromise;
await expect(newPage.locator('h3')).toHaveText('New Window');
})

test('Check File Uploader', async({front})=> {
  await front.fileUpload.clickOnfileUploadLink();
  await front.fileUpload.pageOpened();
  await front.fileUpload.setFileForUpload("./testData/image.jpg");
  await front.fileUpload.clickUploadButton();
  await front.fileUpload.fileUploaded();
})

test.only('Check Broken images ', async({front})=> {
  await front.brokenImages.clickOnfileUploadLink();
  await front.brokenImages.pageOpened();
  //Чекінг зломаних images. Витягую src атрибут кожного img tag і виконую АPI request та перевіркою статус коду
  await front.brokenImages.checkBrokenImages();
})