import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import * as fs from 'fs'

import HomePage from '../pageobjects/home.page.js';

const pages = {
    login: HomePage
}

const file ='./data.json';
let data = JSON.parse(fs.readFileSync(file,'utf-8'))

Given(/^user is in Lemonade homepage$/, async () => {
    await browser.url(data.URL);
    await browser.maximizeWindow();
    await HomePage.checkPricesLabel.waitForExist()
    await HomePage.checkPricesLabel.waitForClickable()
});

Given(/^user is on Lemonade insurance homepage$/, async () => {
    await browser.url(data.URL);
    await browser.maximizeWindow();
    await HomePage.checkPricesLabel.waitForExist()
    await HomePage.checkPricesLabel.waitForClickable()
});

When(/^user clicks on Renters link$/, async () => {
    await HomePage.clickRentersLink();
});

When(/^user clicks on Homeowners link$/, async () => {
    await HomePage.clickHomeownersLink();
});
When(/^user clicks on Car link$/, async () => {
    await HomePage.clickCarLink();
});
When(/^user clicks on Pet link$/, async () => {
    await HomePage.clickPetLink();
});
When(/^user clicks on Life link$/, async () => {
    await HomePage.clickLifeLink();
});
When(/^user clicks on Next button$/, async () => {
    await HomePage.clickNextBtn();
});
When(/^user clicks on Check Our Prices button$/, async () => {
    await HomePage.clickCheckPricesBtn();
});
When(/^user select Nope radio button$/, async () => {
    console.log('starting')
    await HomePage.clickNopeRadio();
});
When(/^user selects Yes radio button$/, async () => {
    await HomePage.clickYesRadio();
});
When(/^verify user is on Check our Price page$/, async () => {
    await HomePage.checkPricesBtn().waitForExist()
});
When(/^user navigated to Account page$/, async () => {
    await browser.pause(5000)
    let elem = $("//h5[text()='Nope']")
    await elem.waitForExist()
    console.log('last step')  
});
When(/^user enters first name and last name$/, async () => {
    await HomePage.enterfirstName(data.firstName)
    await HomePage.enterLastName(data.lastName)
});
When(/^user clicks on Lets Do This button$/, async () => {
    await HomePage.clickLetsDoThisBtn()
});
When(/^user enters Street address$/, async () => {
    await HomePage.enterAddress(data.address)
});
When(/^user selects (.*)$/, async (alaram) => {
    if(alaram==='Fire Alaram'){
        await HomePage.clickFireAlaram()
    }else{
        await HomePage.clickBurglarAlaram()
    }
    
});
Then('verify the text {string}', async (text) => {
    
await browser.pause(2000)
    const elem = await $("//h3[contains(text(),'Do you share your home with any')]");
    await expect(await elem.getText()).toContain('Do you share your home with any')

});

When(/^user click on Check Our Prices button$/, async () => {
    await HomePage.clickCheckOurPricesBtn()
});

When(/^user click on Renters checkbox$/, async () => {
    await HomePage.clickRentersCheckbox()
});

