describe("SummaryView",function() {
  function MockArticle(text) {
    this.text = text;
  }

  MockArticle.prototype.getText = function () {
    return this.text;
  };

  it("Returns the summary in html string", function() {
      summaryView = new SummaryView(new MockArticle("Test"));
      assert.isTrue(summaryView.display() === "<div>Test</div>");
  });
});
