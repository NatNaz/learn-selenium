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
  await driver.manage().setTimeouts({ implicit: 4000 });
  await driver
    .findElement(By.id("postform-text"))
    .sendKeys(
      'git config --global user.name  "New Sheriff in Town" \ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code") \ngit push origin master --force'
    );
  await driver
    .findElement(By.id("select2-postform-expiration-container"))
    .click();
  await driver
    .findElement(By.xpath('//li[contains(text(),"10 Minutes")]'))
    .click();
  await driver
    .findElement(By.id("select2-postform-format-container"))

    .click();
  await driver.actions().sendKeys("\uE015").click();
  await driver
    .findElement(By.id("postform-name"))
    .sendKeys("how to gain dominance among developers");
  await driver.findElement(By.xpath('//button[@type="submit"]')).click();

  const newPasteText = await driver
    .findElement(By.xpath("//textarea[@class='textarea -raw js-paste-raw']"))
    .getText();
  assert.deepStrictEqual(
    newPasteText,
    'git config --global user.name  "New Sheriff in Town" \ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code") \ngit push origin master --force'
  );
  const newPasteName = await driver.findElement(By.xpath("//h1")).getText();
  assert.deepStrictEqual(
    newPasteName,
    "how to gain dominance among developers"
  );
  const newPasteHighlighting = await driver
    .findElement(
      By.xpath(
        '//div[@class="highlighted-code"]//div//div[@class="left"]//a[@class="btn -small h_800"]'
      )
    )
    .getText();
  assert.deepStrictEqual(newPasteHighlighting, "Bash");
})();
