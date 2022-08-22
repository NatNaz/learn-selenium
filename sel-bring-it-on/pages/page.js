require("chromedriver");

const { Builder } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");

class Page {
  constructor() {
    this.driver = Page.initBrowser();
  }

  static initBrowser() {
    const chromeOptions = new Options().addArguments("--log-level=3");
    return new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
  }

  async open(url) {
    await this.driver.get(url);
  }

  async close() {
    await this.driver.quit();
  }
}

module.exports = Page;
