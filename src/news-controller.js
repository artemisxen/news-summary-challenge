(function(exports){
  function NewsController(HeadlinesList) {
    this.headlinesView = new HeadlinesView(HeadlinesList);
  }

  NewsController.prototype = {
    displayHeadlines: function(data) {
      var jsonObject = JSON.parse(data);
      var results = jsonObject.response.results; //articles, headlines[]

      for (var i = 0; i < results.length; i++) {
        NewArticle = new Article(results[i].webTitle, results[i].webUrl);
        this.headlinesView.list.addArticle(NewArticle);
      }
      document.getElementById('headlines').innerHTML = this.headlinesView.headlinesToHtml();
    },
    displaySummary: function(data) {
      var jsonObject = JSON.parse(data);
      var summaryText = jsonObject.sentences[0];

      document.getElementById('summary').innerHTML = summaryText;
    }
  };


  exports.NewsController = NewsController;
})(this);
