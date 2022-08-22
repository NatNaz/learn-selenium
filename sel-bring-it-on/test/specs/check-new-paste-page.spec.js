const { expect } = require("chai");

const CheckNewPastePage = require("../../pages/view-saved-paste-page");

describe("WebDriver", () => {
  const NAME = "how to gain dominance among developers";
  const TEXT =
    'git config --global user.name  "New Sheriff in Town" \ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code") \ngit push origin master --force';
  const HIGHLIGHTING = "Bash";

  let checkNewPastePage;

  before(async () => {
    checkNewPastePage = new CheckNewPastePage();
  });

  it("should check added paste text", async () => {
    const newPasteText = await checkNewPastePage.checkNewPasteText();
    expect(newPasteText).to.be.equal(TEXT);
  });
  it("should check added paste name", async () => {
    const newPasteName = await checkNewPastePage.checkNewPasteName();
    expect(newPasteName).to.be.equal(NAME);
  });
  it("should check added paste highlighting", async () => {
    const newPasteHighlighting = await checkNewPastePage.checkNewPasteName();
    expect(newPasteHighlighting).to.be.equal(HIGHLIGHTING);
  });
});
