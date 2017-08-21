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
  // 
  // displaySummaryForId: function(id) {
  //   article = this.list.getArticleFromId(id);
  //   summaryView = new SummaryView(article);
  //   return noteView.display();
  // }
};

exports.HeadlinesView = HeadlinesView;
})(this);
