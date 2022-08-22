const { expect } = require("chai");

const NewPastePage = require("../../pages/new-paste-page");

describe("WebDriver", () => {
  let newPastePage = new NewPastePage();

  it("should add new paste", async () => {
    const newPaste = await newPastePage;
    expect(newPaste);
  });
});
