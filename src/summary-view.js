(function(exports) {
  function SummaryView(article) {
    this.article = article;
  }

  SummaryView.prototype = {
    display: function() {
      var article = this.article;
      return ("<div>" + "<h3>" + article.getWebTitle() + "</h3>"+ article.getSummary() + "</br>" + '<a href="' + article.getWebUrl() + '">Link</a>' +"</br></div>");
    }
  };

  exports.SummaryView = SummaryView;
})(this);
