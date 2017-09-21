(function(exports) {
  function HeadlinesView(headlinesList){
    this.list = headlinesList;
  }

  HeadlinesView.prototype = {

    headlinesToHtml: function () {
      var string = "<ul>";
      console.log(this.list.headlines);

      this.list.headlines.forEach(function(article) {
        id = article.getId();
        string += ("<li><a href=\"#article/" + id + "\">" + article.getWebTitle() + "</a></li>");
      });
      string += "</ul>";
      return string;
    },

    displaySummaryForId: function(id, data) { //controller
      var article = this.list.getArticleFromId(id);
      article.setSummary(data);
      console.log(article.getSummary());
      console.log(data);
      summaryView = new SummaryView(article);
      return summaryView.display();
    }
  };

exports.HeadlinesView = HeadlinesView;
})(this);
