import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get checkPricesLabel () {
        return $("//a[text()='Check our Prices']");
    }
    public get checkPricesBtn () {
        return $("//a[text()='Check our prices']");
    }

    public get rentersLink () {
        return $("//*[text()='Renters']");
    }
    public get homeOwnersLink () {
        return $("//a[text()='Homeowners']");
    }
    public get carLink () {
        return $("//a[text()='Car']");
    }
    public get petLink () {
        return $("//a[text()='Pet']");
    }
    public get lifeLink () {
        return $("//a[text()='Life']");
    }
    public get leminadoAccountVerify () {
        return $("div.questions-container.has_account");
    }
    public get nopeRadioBtn () {
        return $("//h5[text()='Nope']");
    }
    public get yesRadioBtn () {
        return $("//h5[text()='yes']");
    }
    public get nextBtn () {
        return $("//*[text()='Next']");
    }
    public get firstNameInput () {
        return $("input[name='user_first_name']");
    }
    public get lastNameInput () {
        return $("input[name='user_last_name']");
    }
    public get letsDoThisBtn () {
        return $("button.btn-standard.btn-pink");
    }
    public get addressInput () {
        return $("input[id='geosuggest__input--address-autocomplete']");
    }
    public get fireAlaramSelection () {
        return $("//h5[text()='FIRE ALARM']");
    }
    public get BurglarAlaramSelection () {
        return $("//h5[text()='BURGLAR ALARM']");
    }

    public get helperText (){
        return $("//h3[contains(text(),'Do you share your home with any')]")
    }

    public get rentersCheckbox() {
        return $("//div[./h5[text()='Renters']]")
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async verifyHelperText () {
        await this.helperText().getText()
    }
    public async clickRentersCheckbox () {
        await this.rentersCheckbox.click();
    }
    public async enterfirstName (fName) {
        await this.firstNameInput.addValue(fName)
    }
    public async enterLastName (lName) {
        await this.lastNameInput.addValue(lName);
    }
    public async enterAddress (address) {
        await this.addressInput.addValue(address);
        await browser.pause(2000)
        await browser.keys('\uE007')
    }

    public async clickFireAlaram () {
        await this.fireAlaramSelection.click();
    }
    public async clickBurglarAlaram () {
        await this.BurglarAlaramSelection.click();
    }
    public async clickLetsDoThisBtn () {
        await this.letsDoThisBtn.click();
    }

    public async clickRentersLink () {
        await this.rentersLink.click();
    }
    public async clickHomeownersLink () {
        await this.homeOwnersLink.click();
    }
    public async clickCarLink () {
        await this.carLink.click();
    }
    public async clickPetLink () {
        await this.petLink.click();
    }
    public async clickLifeLink () {
        await this.lifeLink.click();
    }
    public async clickNopeRadio () {
        console.log(0)
        await this.nopeRadioBtn.waitForExist();
        console.log(1)
        await this.nopeRadioBtn.waitForClickable();
        console.log(0)
        await this.nopeRadioBtn.click();
    }
    public async clickYesRadio () {
        await this.yesRadioBtn.click();
    }
    public async clickNextBtn () {
        await this.nextBtn.click();
    }
    public async clickCheckPricesBtn () {
        await browser.pause(1000)
        await this.checkPricesBtn.click()
    }
    public async clickCheckOurPricesBtn () {
        await this.checkPricesLabel.waitForClickable()
        await this.checkPricesLabel.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new HomePage();
