describe("Article",function() {
  var article = new Article("News", "www.url.com");

  it("Has a webTitle", function() {
      assert.isTrue(article.getWebTitle() === "News");
  });

  it("Has a webUrl", function() {
      assert.isTrue(article.getWebUrl() === "www.url.com");
  });

  it("Has an id", function() {
    article = new Article();
    assert.isTrue(article.getId() === 1);
  });
});
