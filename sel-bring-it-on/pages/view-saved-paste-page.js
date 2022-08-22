const { By } = require("selenium-webdriver");

const Page = require("./page");

class CheckNewPastePage extends Page {
  constructor() {
    super();

    this.newPasteText = By.xpath(
      "//textarea[@class='textarea -raw js-paste-raw']"
    );
    this.newPasteName = By.xpath("//h1");
    this.newPasteHighlighting = By.xpath(
      '//div[@class="highlighted-code"]//div//div[@class="left"]//a[@class="btn -small h_800"]'
    );
  }

  async checkNewPasteText() {
    return this.driver.findElement(this.newPasteText).getText();
  }
  async checkNewPasteName() {
    return this.driver.findElement(this.newPasteName).getText();
  }
  async checkNewPasteHighlighting() {
    return this.driver.findElement(this.newPasteHighlighting).getText();
  }
}
module.exports = CheckNewPastePage;
