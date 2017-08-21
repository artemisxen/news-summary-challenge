(function(exports) {
  function SummaryView(article) {
    this.article = article;
  }

  SummaryView.prototype = {
    display: function() {
      var article = this.article;
      return "<div>" + article.getText() + "</div>";
    }
  };

  exports.SummaryView = SummaryView;
})(this);
