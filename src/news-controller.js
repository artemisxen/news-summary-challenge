(function(exports){
  function NewsController(HeadlinesList) {
    this.headlinesView = new HeadlinesView(HeadlinesList);
  }

  NewsController.prototype = {
    displayHeadlines: function(data) {
      var jsonObject = JSON.parse(data);
      var results = jsonObject.response.results;
      for (var i = 0; i < results.length; i++) {
        NewArticle = new Article(i, results[i].webTitle, results[i].webUrl);
        this.headlinesView.list.addArticle(NewArticle);
      }
      document.getElementById('headlines').innerHTML = this.headlinesView.headlinesToHtml();
    },

    displaySummary: function(text) {
      document.getElementById('summary').innerHTML = text;
    }
  };

  exports.NewsController = NewsController;
})(this);
