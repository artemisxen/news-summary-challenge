describe("NewsModel",function() {
  it("Has a news text", function() {
      var newsModel = new NewsModel("News");
      assert.isTrue(newsModel.getText() === "News");
      assert.isTrue(newsModel.getText() === "News  ");
  });
});
