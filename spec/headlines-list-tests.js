describe("HeadlinesList",function() {

  function MockArticle(text) {
    this.text = text;
  }

  MockArticle.prototype.getText = function () {
    return this.text;
  };

  var headlinesList = new HeadlinesList(MockArticle);

  it("Starts with an empty array", function() {
    assert.isTrue(headlinesList.headlines.length === 0);
  });

  it("Can add a new article in the array", function() {
    headlinesList.addArticle("test");
    assert.isTrue(headlinesList.headlines.length === 1);
  });
});
