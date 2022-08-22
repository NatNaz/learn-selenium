const { By } = require("selenium-webdriver");

const Page = require("./page");

class NewPastePage extends Page {
  constructor() {
    super();

    this.newPasteInput = By.id("postform-text");
    this.pasteExpiration = By.id("select2-postform-expiration-container");
    this.tenMinutes = By.xpath('//li[contains(text(),"10 Minutes")]');
    this.pasteName = By.id("postform-name");
    this.submitButton = By.xpath("//button[@type='button'");
    this.newPasteText = By.xpath(
      "//textarea[@class='textarea -raw js-paste-raw']"
    );
  }

  async open() {
    await super.open("https://pastebin.com/");
  }

  async addNewPaste(text, expiration, name) {
    await this.driver.findElement(this.newPasteInput).sendKeys(text);
    await this.driver.findElement(this.pasteExpiration).sendKeys(expiration);
    await this.driver.findElement(this.tenMinutes).click();
    await this.driver.findElement(this.pasteName).sendKeys(name);
    await this.driver.findElement(this.submitButton).click();
  }
}

module.exports = NewPastePage;
