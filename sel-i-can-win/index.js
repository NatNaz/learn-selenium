require("chromedriver");

const { Builder, By } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");
const assert = require("assert");

(async () => {
  const chromeOptions = new Options().addArguments("--log-level=3");

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  await driver.get("https://pastebin.com/");
  await driver.manage().setTimeouts({ implicit: 8000 });
  await driver
    .findElement(By.id("postform-text"))
    .sendKeys("Hello from WebDriver");
  await driver
    .findElement(By.id("select2-postform-expiration-container"))
    .click();
  await driver
    .findElement(By.xpath('//li[contains(text(),"10 Minutes")]'))
    .click();
  await driver.findElement(By.id("postform-name")).sendKeys("helloweb");
  await driver.findElement(By.xpath('//button[@type="submit"]')).click();

  const newPasteText = await driver
    .findElement(By.xpath("//textarea[@class='textarea -raw js-paste-raw']"))
    .getText();
  assert.deepStrictEqual(newPasteText, "Hello from WebDriver");

  await driver.quit();
})();
