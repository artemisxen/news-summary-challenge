describe("HeadlinesView", function() {

  function MockArticle(text) {
    this.text = text;
  }

  MockArticle.prototype.getText = function () {
    return this.text;
  };

  var emptyMockList = {
    returnHeadlines: function() {
      return [];
    }
  };

  var mockList = {
    returnHeadlines: function() {
      return [new MockArticle("test"), new MockArticle("test 2")];
    }
  };

  var htmlString = "<ul><li><div>test</div></li><li><div>test 2</div></li></ul>";
  var htmlEmptyString = "<ul></ul>";
  var EmptyHeadlinesView = new HeadlinesView(emptyMockList);


  it("takes a HeadlinesList upon instation", function() {
    assert.isTrue(EmptyHeadlinesView.list === emptyMockList);
  });

  describe("empty HeadlinesList", function() {
    it("returns empty unordered list", function() {
      assert.isTrue(EmptyHeadlinesView.headlinesToHtml() === htmlEmptyString);
    });
  });

  describe("List with several articles", function() {
    HeadlinesView = new HeadlinesView(mockList);
    it("returns an HTML string", function() {
      assert.isTrue(HeadlinesView.headlinesToHtml() === htmlString);
    });
  });
});
