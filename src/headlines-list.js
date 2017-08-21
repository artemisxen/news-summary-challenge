(function(exports) {
  function HeadlinesList() {
    this.headlines = [];
  }

  HeadlinesList.prototype = {

  addArticle: function(article) {
    this.headlines.push(article);
  },

  returnHeadlines: function() {
    return this.headlines;
  }
};

  exports.HeadlinesList = HeadlinesList;
})(this);
